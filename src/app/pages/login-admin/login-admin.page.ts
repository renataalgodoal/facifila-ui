import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {OverlayService} from '../../core/services/overlay.service';
import {AdminsService} from '../../core/services/admins.service';

@Component({
    selector: 'app-login-admin',
    templateUrl: './login-admin.page.html',
    styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage implements OnInit {
    public form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private overlayService: OverlayService,
        private adminsService: AdminsService
    ) {

    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.form = this.formBuilder.group({
                user: [''],
                password: [''],
            }
        );
    }

    segmentChanged(ev: any) {
        console.log('Segment changed', ev);
    }

    async login() {
        const loading = await this.overlayService.loading();
        try {
            await this.adminsService.login(this.form.value);
            this.router.navigate(['home-admin']).then();
        } catch (e) {
            await this.overlayService.toast({
                message: 'Erro ao efetuar login.'
            });
        } finally {
            loading.dismiss();
        }
    }

}
