import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {FilaPage} from './fila.page';

describe('FilaPage', () => {
    let component: FilaPage;
    let fixture: ComponentFixture<FilaPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FilaPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(FilaPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
