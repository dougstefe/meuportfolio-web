import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { AccountConfirmationResponse } from 'src/app/core/models/account-confirmation-response'
import { AccountService } from 'src/app/core/services/account/account.service'

@Component({
  selector: 'app-validate-account',
  templateUrl: './validate-account.component.html',
  styleUrls: ['./validate-account.component.scss']
})
export class ValidateAccountComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly accountService: AccountService
  ) { }

  protected accountConfirmation$ = new Observable<AccountConfirmationResponse>();

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.accountConfirmation$ = this.accountService.confirmateAccount(param['token'])
    })
  }

}
