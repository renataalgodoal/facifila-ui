import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsersService} from '../../core/services/users.service';
import {OverlayService} from '../../core/services/overlay.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-meus-dados',
    templateUrl: './meus-dados.page.html',
    styleUrls: ['./meus-dados.page.scss'],
})
export class MeusDadosPage implements OnInit {
    public pagina: number = 1;
    public form: FormGroup;
    public profile;

    constructor(
        private formBuilder: FormBuilder,
        private usersService: UsersService,
        private overlayService: OverlayService,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.buildForm();
        this.usersService.getUserProfile().then((res) => {
            this.profile = res;
            this.loadInfo();
        });
    }

    buildForm() {
        this.form = this.formBuilder.group({
                name: [''],
                birthDate: [''],
                mail: [''],
                specialNeeds: [''],
                gender: [''],
                isPregnant: [''],
            }
        );
    }

    loadInfo() {
        let formattedBirthDate = (this.profile.birthDate.split('T')[0]).split('-');
        this.form.patchValue({
            name: this.profile.name,
            birthDate: `${formattedBirthDate[1]}/${formattedBirthDate[2]}/${formattedBirthDate[0]}`,
            mail: this.profile.mail,
            specialNeeds: this.profile.specialNeeds ? 1 : 0,
            gender: this.profile.gender,
            isPregnant: this.profile.isPregnant ? 1 : 0
        })
    }


    gender() {
        return this.form.controls.gender.value === 'female';
    }

    async forward() {
        const loading = await this.overlayService.loading();
        try {
            console.log('special - ', this.form.value.specialNeeds);
            this.form.value.specialNeeds = this.form.value.specialNeeds === '1' ;
            this.form.value.isPregnant = this.form.value.isPregnant === '1';
            console.log(this.form.value);
            await this.usersService.updateUserProfile(this.profile.entityUuid, this.form.value);
            this.pagina++;
        } catch (e) {
            let message = 'Erro ao atualizar usuário.';
            await this.overlayService.toast({
                message: message
            });
        } finally {
            loading.dismiss();
        }
    }

    goToHome() {
        this.router.navigateByUrl('home').then();
        this.pagina--;
    }

}


