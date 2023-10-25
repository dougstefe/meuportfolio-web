import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { LoginResponse } from '../../models/login-response'
import { LoginRequest } from '../../models/login-request'
import { environment } from 'src/environments/environment'
import { User } from '../../models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient
  ) { }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(environment.Api, request)
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken)
  }

  clearAccessToken() {
    localStorage.removeItem('accessToken')
  }

  getUser(): User | undefined {
    const user = localStorage.getItem('user')
    if (!user)
      return
    return JSON.parse(user)
  }

  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  clearUser() {
    localStorage.removeItem('user')
  }

}
