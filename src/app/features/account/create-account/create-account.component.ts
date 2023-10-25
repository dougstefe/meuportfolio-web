import { Component } from '@angular/core'
import { FormBuilder, FormControl, Validators } from '@angular/forms'
import { ValidationService } from 'src/app/core/services/validation/validation.service'

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly validationService: ValidationService
  ) { }

  accountCreated = true

  emailControl = new FormControl('', Validators.required)
  fullNameControl = new FormControl('', Validators.required)
  passwordControl = new FormControl('', Validators.required)
  passwordConfirmControl = new FormControl('', [Validators.required, this.validationService.compareValidator(this.passwordControl)])

  formAccount = this.formBuilder.group({
    email: this.emailControl,
    fullName: this.fullNameControl,
    password: this.passwordControl,
    passwordConfirm: this.passwordConfirmControl
  })



  onSubmit() {
    if (!this.formAccount.valid)
      return

    this.accountCreated = true
  }

}
