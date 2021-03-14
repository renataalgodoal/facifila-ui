import {Injectable} from '@angular/core';

import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {StorageService} from '../common/storage.service';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(
        public http: HttpClient,
        private storageService: StorageService
    ) {
    }

    signup(user) {
        return this.http.post<string>(`${environment.baseApiUrl}users/signup`, user).toPromise();
    }

    login(credentials) {
        return this.http.post<LoginResponse>(`${environment.baseApiUrl}users/login`, credentials).toPromise().then((res) => {
            this.storageService.setStorage('JWTToken', res.token);
            this.storageService.removeStorage('profile');
        });
    }

    getUserProfile() {
        const profile = JSON.parse(this.storageService.getStorage('profile'));
        if (!profile) {
            return this.http.get(`${environment.baseApiUrl}users/me`).toPromise().then((res) => {
                this.storageService.setStorage('profile', res);
                return Promise.resolve(res);
            });
        } else {
            return Promise.resolve(profile);
        }
    }

    updateUserProfile(entityUuid, info) {
        return this.http.patch(`${environment.baseApiUrl}users/${entityUuid}`, info).toPromise().then((res) => {
            this.storageService.removeStorage('profile');
        });
    }

    getUserAppointments(entityUuid) {
        return this.http.get(`${environment.baseApiUrl}users/${entityUuid}/appointments`).toPromise().then((res) => {
            return Promise.resolve(res);
        });
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
