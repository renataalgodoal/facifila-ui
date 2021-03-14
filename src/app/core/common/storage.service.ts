import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    constructor() {
    }

    public setStorage(key, value) {
        if (key && value) {
            if (value instanceof Object) {
                window.localStorage.setItem(key, JSON.stringify(value));
                return;
            }
            window.localStorage.setItem(key, value);
        }
    }

    public getStorage(key) {
        return key && window.localStorage.getItem(key);
    }

    public removeStorage(key) {
        return window.localStorage.removeItem(key);
    }


}
