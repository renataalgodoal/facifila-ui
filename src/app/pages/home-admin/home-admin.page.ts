import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminsService} from '../../core/services/admins.service';

@Component({
    selector: 'app-home-admin',
    templateUrl: './home-admin.page.html',
    styleUrls: ['./home-admin.page.scss'],
})
export class HomeAdminPage implements OnInit {

    constructor(
        private router: Router,
        private adminsService: AdminsService
    ) {
    }

    ngOnInit() {
    }

    goToAlterarGrade(){
        this.router.navigate(['grade']).then();
    }

    goToAlterarSenha(){
        this.router.navigate(['dados-admin']).then();
    }

    logout() {
        this.adminsService.logout();
        this.router.navigate(['login-admin']).then();
    }


}
