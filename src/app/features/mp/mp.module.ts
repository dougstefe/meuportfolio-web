import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MpRoutingModule } from './mp-routing.module'
import { HomeComponent } from './home/home.component'
import { ProfileComponent } from './profile/profile.component'
import { ReactiveFormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MpRoutingModule,
    ReactiveFormsModule
  ]
})
export class MpModule { }
