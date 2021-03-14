import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OverlayService} from '../../core/services/overlay.service';
import {AdminsService} from '../../core/services/admins.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-dados-admin',
    templateUrl: './dados-admin.page.html',
    styleUrls: ['./dados-admin.page.scss'],
})
export class DadosAdminPage implements OnInit {
    public pagina = 1;
    public form: FormGroup;
    public error = '';

    constructor(
        private formBuilder: FormBuilder,
        private overlayService: OverlayService,
        private adminsService: AdminsService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.form = this.formBuilder.group({
                oldPassword: new FormControl('', [Validators.required]),
                newPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
                newPassword2: new FormControl('', [Validators.required, Validators.minLength(6)])
            }
        );
    }

    async forward() {
        if (!this.form.valid) {
            for (const control in this.form.controls) {
                if (this.form.controls[control] && this.form.controls[control].errors && this.form.controls[control].errors.required) {
                    await this.overlayService.toast({
                        message: 'Preencha todos os campos'
                    });

                    return;
                }
            }

            await this.overlayService.toast({
                message: 'Nova senha precisa ter mais de 6 caracteres'
            });
            return;
        }

        if (this.form.value.newPassword !== this.form.value.newPassword2) {
            await this.overlayService.toast({
                message: 'Nova senha e senha de confirmação diferentes.'
            });
            return;
        }

        const loading = await this.overlayService.loading();

        try {
            await this.adminsService.resetPassword(
                {
                    oldPassword: this.form.value.oldPassword,
                    password: this.form.value.newPassword
                });
            this.pagina++;
        } catch (e) {
            console.log('e=',e);
            let message = 'Erro ao efetuar mudança de senha.';

            if(e.error.message==='Invalid old password.') {
                message = 'Senha antiga inválida!';
            }

            await this.overlayService.toast({
                message
            });
        } finally {
            loading.dismiss();
        }
    }

    goToHomeAdmin() {
        this.pagina--;
        this.router.navigate(['home-admin']).then();
    }

    back() {
        this.pagina--;
    }

}
