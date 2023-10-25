import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { BehaviorSubject, Observable, Subject, Subscriber, map, of } from 'rxjs'
import { Profile } from 'src/app/core/models/profile'
import { User } from 'src/app/core/models/user'
import { ProfileService } from 'src/app/core/services/profile/profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user$ = new Observable<Profile>();

  user: Profile | undefined = undefined

  // time$: Observable<string> = new Observable<string>(observer => {
  //   setInterval(() => {
  //     observer.next(new Date().toString())
  //   }, 5000)
  // });

  constructor(
    private readonly route: ActivatedRoute,
    private readonly profileService: ProfileService
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.user$ = this.profileService.getProfile(param['name'])
    })
  }

}
