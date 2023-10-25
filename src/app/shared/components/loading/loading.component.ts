import { Component, Input } from '@angular/core'
import { Subject } from 'rxjs'
import { LoaderService } from './loader.service'

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  constructor(
    private loaderService: LoaderService
  ) { }

  public isLoading: Subject<boolean> = this.loaderService.isLoading;
}
