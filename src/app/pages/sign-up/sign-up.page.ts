import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../core/services/users.service';
import {Router} from '@angular/router';
import {OverlayService} from '../../core/services/overlay.service';


@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.page.html',
    styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
    public pagina: number = 1;
    public form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private usersService: UsersService,
        private router: Router,
        private overlayService: OverlayService
    ) {
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.form = this.formBuilder.group({
                name: [''],
                birthDate: [''],
                legalId: [''],
                specialNeeds: [''],
                gender: [''],
                isPregnant: [false],
                mail: [''],
                password: [''],
                passwordConfirm: [''],
            }
        );
    }

    gender() {
        return this.form.controls.gender.value === 'female';
    }

    async save() {
        const loading = await this.overlayService.loading();
        try {
            this.form.value.specialNeeds = this.form.value.specialNeeds === '1' ;
            this.form.value.isPregnant = this.form.value.isPregnant === '1';
            if (this.form.value.password !== this.form.value.passwordConfirm) {
                throw 'Senhas diferentes!';
            }
            this.form.value.birthDate = this.parseDate(this.form.value.birthDate);
            await this.usersService.signup(this.form.value);
            this.forward();
        } catch (e) {
            let message = 'Erro ao efetuar cadastro.';
            if (e === 'Senhas diferentes!') {
                message = e;
            }
            await this.overlayService.toast({
                message: message
            });
        } finally {
            loading.dismiss();
        }

    }

    forward() {
        console.log(this.form);
        this.pagina++;

    }

    back() {
        this.pagina--;
    }

    goToLogin() {
        this.router.navigate(['login']).then();
    }

    parseDate(date) {
        date = date.split('/');
        return `${date[1]}/${date[0]}/${date[2]}`;
    }

}
