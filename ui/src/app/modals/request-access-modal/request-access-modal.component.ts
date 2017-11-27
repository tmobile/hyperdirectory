/*=========================================================================
Copyright © 2017 T-Mobile USA, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
=========================================================================*/
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {GroupService} from '../../services/groups/group.service';
import {RequestsService} from "../../services/requests/requests.service";

@Component({
    selector: 'app-request-access-modal',
    templateUrl: './request-access-modal.component.html',
    styleUrls: ['./request-access-modal.component.scss']
})
export class RequestAccessModalComponent {

    constructor(private router: Router,
                private requestsService: RequestsService,
                private groupService: GroupService) {
    }

    private _show;
    @Output() showChange = new EventEmitter();

    @Input()
    set show(value) {
        this._show = value;
        this.showChange.emit(this._show);
    }

    get show() {
        return this._show;
    }

    close() {
        this.show = false;
    }

    requestAccess() {
        this.requestsService.requestAccess(0)
            .then(() => {
                this.close();
            });
    }

}
