import { Injectable } from '@angular/core'
import { AbstractControl, ValidatorFn } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  compareValidator(compareControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {

      if (control.value !== compareControl.value) {
        control.setErrors({
          invalidComparison: true
        })
        return {
          'invalidComparison': { value: control.value }
        }
      }
      return null
    }
  }
}
