import { Component } from '@angular/core'
import { FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginResponse } from 'src/app/core/models/login-response'
import { ResponseError } from 'src/app/core/models/response-error'
import { AuthService } from 'src/app/core/services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService
  ) { }

  errorMessage: string | undefined

  userControl = new FormControl('', [Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)]);
  passwordControl = new FormControl('', [Validators.required]);

  formLogin = this.formBuilder.group({
    user: this.userControl,
    password: this.passwordControl,
  });

  handlerSuccess(response: LoginResponse) {
    this.authService.setAccessToken(response.accessToken)
    this.authService.setUser(response.user)
    this.router.navigate(['/mp/home'])
  }

  handlerError(error: ResponseError) {
    if (error.status === 401) {
      this.errorMessage = 'Email ou senha inválidos'
    }
  }

  onSubmit() {
    this.errorMessage = undefined

    if (this.formLogin.valid) {
      const request = {
        email: String(this.userControl.value),
        password: String(this.passwordControl.value)
      }
      this.authService.login(request)
        .subscribe(
          {
            next: (response) => this.handlerSuccess(response),
            error: (error) => this.handlerError(error)
          }
        )
    }
  }

}
