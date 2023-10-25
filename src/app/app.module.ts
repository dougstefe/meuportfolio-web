import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoadingModule } from "./shared/components/loading/loading.module"
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { LoadingInterceptor } from './core/interceptors/loading-interceptor'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingModule,
    FontAwesomeModule
  ]
})
export class AppModule { }
