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
import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../../environments/environment";
import {UtilsService} from "../utils.service";
import {ContextService} from "../context.service";


@Injectable()
export class RequestsService {

    constructor(private http: Http,
                private context: ContextService,
                private utils: UtilsService) {
    }


    requestAccess(groupId) {
        return this.http.get('')
            .toPromise();
    }

    getUserRequestsReceived(userId) {
        return this.http.get('')
            .toPromise()
            .then((response) => {
                return response.json();
            })
            .catch(this.utils.catchError)
    }

    getUserRequestsSent(id) {
        return this.http.get('')
            .toPromise()
            .then((response) => {
                return response.json()
            }).catch(this.utils.catchError)
    }

    approveRequest(requestId, reason = '') {
        let request = environment.patch_proposal(requestId, 'CONFIRMED', reason, '');

        return this.http[request.method](request.url, request.body, this.context.httpOptions())
            .toPromise()
            .then((response) => {
                console.log(response.json());
                return response.json();
            })
            .catch(this.utils.catchError);
    }

    denyRequest(requestId, reason = '') {
        let request = environment.patch_proposal(requestId, 'REJECTED', reason, '');

        return this.http[request.method](request.url, request.body, this.context.httpOptions())
            .toPromise()
            .then((response) => {
                return response.json();
            })
            .catch(this.utils.catchError);
    }

    approveAllRequests(selection) {
        return this.utils.setTimeoutPromise(1000)
            .then(() => {
                return true;
            })
            .catch(this.utils.catchError);
    }

    denyAllRequests(selection) {
        return this.utils.setTimeoutPromise(1000)
            .then(() => {
                return true;
            })
            .catch(this.utils.catchError);
    }

    emailRequestOwner(userId, requestId) {
        return this.utils.setTimeoutPromise(1000)
            .then(() => {
                return true;
            })
            .catch(this.utils.catchError);
    }

    resendRequest(userId, requestId) {
        return this.utils.setTimeoutPromise(1000)
            .then(() => {
                return true;
            })
            .catch(this.utils.catchError);
    }
}
