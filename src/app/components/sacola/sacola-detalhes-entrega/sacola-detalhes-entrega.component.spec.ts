import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SacolaDetalhesEntregaComponent } from './sacola-detalhes-entrega.component';

describe('SacolaDetalhesEntregaComponent', () => {
  let component: SacolaDetalhesEntregaComponent;
  let fixture: ComponentFixture<SacolaDetalhesEntregaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SacolaDetalhesEntregaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SacolaDetalhesEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
