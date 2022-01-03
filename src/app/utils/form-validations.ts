import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidations {

    static validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach((field) => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                FormValidations.validateAllFormFields(control);
            }

            console.log(field, control)
        });
    }

}