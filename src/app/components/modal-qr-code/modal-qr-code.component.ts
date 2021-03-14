import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-modal-qr-code',
    templateUrl: './modal-qr-code.component.html',
    styleUrls: ['./modal-qr-code.component.scss'],
})
export class ModalQrCodeComponent implements OnInit {

    uuid;
    qrcode = "renata lindona";

    constructor() {
    }

    ngOnInit() {
        console.log('UUID = ', this.uuid);
    }

}
