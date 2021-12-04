import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdutoAdicionalOpcaoComponent } from './produto-adicional-opcao.component';

describe('ProdutoAdicionalOpcaoComponent', () => {
  let component: ProdutoAdicionalOpcaoComponent;
  let fixture: ComponentFixture<ProdutoAdicionalOpcaoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoAdicionalOpcaoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoAdicionalOpcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
