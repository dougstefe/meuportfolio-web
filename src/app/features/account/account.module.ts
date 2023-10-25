import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AccountRoutingModule } from './account-routing.module'
import { CreateAccountComponent } from './create-account/create-account.component'
import { RecoverPasswordComponent } from './recover-password/recover-password.component'
import { RemoveAccountComponent } from './remove-account/remove-account.component'
import { ReactiveFormsModule } from '@angular/forms';
import { ValidateAccountComponent } from './validate-account/validate-account.component'


@NgModule({
  declarations: [
    CreateAccountComponent,
    RecoverPasswordComponent,
    RemoveAccountComponent,
    ValidateAccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
