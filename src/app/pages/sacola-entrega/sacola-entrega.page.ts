import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Services
import { RouterService } from 'src/app/services/routes.service';
import { StorageService } from 'src/app/services/storage.service';

//Utils
import { keys } from 'src/app/utils/keys.enum';
import { FormValidations } from 'src/app/utils/form-validations';

@Component({
  selector: 'app-sacola-entrega',
  templateUrl: './sacola-entrega.page.html',
  styleUrls: ['./sacola-entrega.page.scss'],
})
export class SacolaEntregaPage implements OnInit {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: RouterService,
    private storage: StorageService
  ) {
    this.form = this.formBuilder.group({
      endereco: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: ['']
    })
  }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    const formData = await this.storage.get(keys.ENTREGA)
    this.form.patchValue(formData)
  }

  save() {
    FormValidations.validateAllFormFields(this.form)
    if (this.form.valid) {
      this.storage.set(keys.ENTREGA, this.form.value)
      this.router.go('/sacola')
    }
  }
}
