import {Injectable} from '@angular/core';

import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {StorageService} from '../common/storage.service';

@Injectable({
    providedIn: 'root'
})
export class AdminsService {

    constructor(
        public http: HttpClient,
        private storageService: StorageService
    ) {
    }

    login(credentials) {
        return this.http.post<LoginResponse>(`${environment.baseApiUrl}admins/login`, credentials).toPromise().then((res) => {
            this.storageService.setStorage('JWTToken', res.token);
            this.storageService.removeStorage('profile');
        });
    }

    resetPassword(credentials) {
        return this.http.post<LoginResponse>(`${environment.baseApiUrl}admins/update-password`, credentials).toPromise().then((res) => {
            this.storageService.setStorage('JWTToken', res.token);
            this.storageService.removeStorage('profile');
        });
    }

    getSystemParameters() {
        return this.http.get<SystemParametersResponse>(`${environment.baseApiUrl}system-parameters`).toPromise();
    }

    setSystemParameters(systemParameters) {
        return this.http.patch(`${environment.baseApiUrl}system-parameters`, systemParameters).toPromise();
    }

    logout() {
        this.storageService.removeStorage('profile');
        this.storageService.removeStorage('JWTToken');
    }

}

export interface LoginResponse {
    token: string;
    status: string;
}

export interface SystemParametersResponse {
    activityStartTime: string;
    activityEndTime: string;
    numberOfEmployees: number;
    examTime: number;
}
