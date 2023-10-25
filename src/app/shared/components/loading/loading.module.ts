import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoadingComponent } from './loading.component'
import { LoaderService } from './loader.service'



@NgModule({
  declarations: [
    LoadingComponent
  ],
  exports: [
    LoadingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoadingModule { }
