import {Component, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {PopoverContactComponent} from '../../components/popover-contact/popover-contact.component';
import {PopoverLocationComponent} from '../../components/popover-location/popover-location.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsersService} from '../../core/services/users.service';
import {Router} from '@angular/router';
import {OverlayService} from '../../core/services/overlay.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
    public form: FormGroup;

    constructor(
        public popoverController: PopoverController,
        private formBuilder: FormBuilder,
        private usersService: UsersService,
        private router: Router,
        private overlayService: OverlayService
    ) {
    }

    async presentContactPopover(ev: any) {
        const popover = await this.popoverController.create({
            component: PopoverContactComponent,
            cssClass: 'my-custom-class',
            event: ev,
            translucent: true,
        });
        return await popover.present();
    }

    async presentLocationPopover(ev: any) {
        const popover = await this.popoverController.create({
            component: PopoverLocationComponent,
            cssClass: 'my-custom-class',
            event: ev,
            translucent: true,
        });
        return await popover.present();
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

    async login() {
        const loading = await this.overlayService.loading();
        try {
            await this.usersService.login(this.form.value);
            this.router.navigate(['home']).then();
        } catch (e) {
            await this.overlayService.toast({
                message: 'Erro ao efetuar login.'
            });
        } finally {
            loading.dismiss();
        }
    }

    goToSignUp() {
        this.router.navigate(['sign-up']).then();
    }
}
