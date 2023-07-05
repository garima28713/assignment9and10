import { AbstractControl } from '@angular/forms';

export function matchControls(a: string, b: string) {
  return function (form: AbstractControl) {
    const aControl = form.get(a)?.value;
    const bControl = form.get(b)?.value;

    if (aControl !== bControl) {
      return   form.get(b)?.setErrors({
        MatchPassword: true
      })
    }
    return null;
  };
}