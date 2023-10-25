import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CreateAccountComponent } from './create-account/create-account.component'
import { RecoverPasswordComponent } from './recover-password/recover-password.component'
import { RemoveAccountComponent } from './remove-account/remove-account.component'
import { ValidateAccountComponent } from './validate-account/validate-account.component'

const routes: Routes = [
  { path: 'create', component: CreateAccountComponent },
  { path: 'validate/:token', component: ValidateAccountComponent },
  { path: 'remove', component: RemoveAccountComponent },
  { path: 'recover', component: RecoverPasswordComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
