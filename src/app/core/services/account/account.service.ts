import { Injectable } from '@angular/core'
import { AccountConfirmationResponse } from '../../models/account-confirmation-response'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  confirmateAccount(_token: string): Observable<AccountConfirmationResponse> {
    return new Observable<AccountConfirmationResponse>(observer => {
      setTimeout(() => {
        observer.next({
          confirmated: true
        })
      }, 2000)
    })
  }
}
