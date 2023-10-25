import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ValidateAccountComponent } from './validate-account.component'
import { RouterTestingModule } from '@angular/router/testing'

describe('ValidateAccountComponent', () => {
  let component: ValidateAccountComponent
  let fixture: ComponentFixture<ValidateAccountComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ValidateAccountComponent]
    })
    fixture = TestBed.createComponent(ValidateAccountComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
