import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';

import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {StorageService} from '../core/common/storage.service';

const exceptions = [
    `${environment.baseApiUrl}/admin/login`,
    `${environment.baseApiUrl}/users/login`,
    `${environment.baseApiUrl}/users/signup`

];

@Injectable()
export class BeHttpsRequestInterceptor implements HttpInterceptor {

    constructor(public storageService: StorageService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.verifyIfNeedsAuthorization(request, next));
    }

    isAssetPath(path) {
        let p = path.replace(/^\.\./g, '');
        p = p.replace(/^\./g, '');
        return p.startsWith('/assets/');
    }

    isException(url) {
        for (const e of exceptions) {
            if (url === e) {
                return true;
            }
        }
        return false;
    }

    async verifyIfNeedsAuthorization(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
        let newHandler;
        if (this.isException(request.url) || this.isAssetPath(request.url)) {
            newHandler = next.handle(request);
        } else {
            const token = await this.storageService.getStorage('JWTToken');
            const requestWithAuthorization = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});
            newHandler = next.handle(requestWithAuthorization);
        }

        return newHandler.pipe().toPromise();
    }
}
