import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AdminsService} from '../../core/services/admins.service';
import {Router} from '@angular/router';
import {OverlayService} from '../../core/services/overlay.service';

@Component({
    selector: 'app-grade',
    templateUrl: './grade.page.html',
    styleUrls: ['./grade.page.scss'],
})
export class GradePage implements OnInit {
    public pagina: number = 1;
    public form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private adminsService: AdminsService,
        private overlayService: OverlayService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.buildForm();
        this.loadInfo();
    }

    buildForm() {
        this.form = this.formBuilder.group({
                activityStartTime: [''],
                activityEndTime: [''],
                numberOfEmployees: [''],
                examTime: [''],
            }
        );
        console.log(this.pagina);
    }

    loadInfo() {
        this.adminsService.getSystemParameters().then((res) => {
            this.form.patchValue({
                activityStartTime: res.activityStartTime,
                activityEndTime: res.activityEndTime,
                numberOfEmployees: res.numberOfEmployees,
                examTime: res.examTime
            })
        });
    }

    forward() {
        this.pagina++;
    }

    back() {
        this.pagina--;
    }

    async save() {
        const loading = await this.overlayService.loading();
        try {
            console.log(this.form.value);
            await this.adminsService.setSystemParameters(this.form.value);
            this.pagina++;
            this.forward();
        } catch (e) {
            let message = 'Erro ao atualizar grade horária.';
            await this.overlayService.toast({
                message: message
            });
        } finally {
            loading.dismiss();
        }

    }

    forward2() {
        this.pagina = 4;
    }

    goToHomeAdmin() {
        this.pagina--;
        this.router.navigate(['home-admin']).then();
    }

}
