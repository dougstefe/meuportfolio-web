import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { RouterTestingHarness } from '@angular/router/testing'
import { Observable, PartialObserver, ReplaySubject } from 'rxjs'
import { Experience, Profile, Skill } from 'src/app/core/models/profile'
import { AuthService } from 'src/app/core/services/auth/auth.service'
import { ProfileService } from 'src/app/core/services/profile/profile.service'
import { faPlus, faPencil, faXmark } from '@fortawesome/free-solid-svg-icons'
import { SkillService } from 'src/app/core/services/skill/skill.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly profileService: ProfileService,
    private readonly authService: AuthService,
    private readonly skillService: SkillService
  ) {

  }
  faPlus = faPlus
  faPencil = faPencil
  faXmark = faXmark

  photo = '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'
  experiences: Experience[] = []
  skills: Skill[] = []
  profile$ = new Observable<Profile>();

  experienceToDelete?: Experience = undefined
  skillToDelete?: Skill = undefined

  idControl = new FormControl('');
  keyNameControl = new FormControl('', [Validators.required]);
  fullNameControl = new FormControl('', [Validators.required]);
  titleControl = new FormControl('', [Validators.required]);
  aboutControl = new FormControl('', [Validators.required]);

  formProfile = this.formBuilder.group({
    id: this.idControl,
    keyName: this.keyNameControl,
    fullName: this.fullNameControl,
    title: this.titleControl,
    about: this.aboutControl,
  });

  experienceTitleControl = new FormControl('', [Validators.required]);
  experienceCompanyControl = new FormControl('', [Validators.required]);
  experienceStartDateControl = new FormControl('', [Validators.required]);
  experienceEndDateControl = new FormControl('');
  experienceUntilNowControl = new FormControl('');
  experienceDescriptionControl = new FormControl('', [Validators.required]);

  formExperience = this.formBuilder.group({
    title: this.experienceTitleControl,
    company: this.experienceCompanyControl,
    startDate: this.experienceStartDateControl,
    endDate: this.experienceEndDateControl,
    untilNow: this.experienceUntilNowControl,
    description: this.experienceDescriptionControl
  });

  skillOptions: Skill[] = []

  skillControl = new FormControl('', [Validators.required]);

  formSkill = this.formBuilder.group(
    {
      skill: this.skillControl
    }
  )


  ngOnInit(): void {
    const user = this.authService.getUser()
    if (!user) {
      this.router.navigate(['/login'])
      return
    }

    this.profile$ = this.profileService.getProfile(user.key)
    this.profile$.subscribe(profile => {
      this.idControl.setValue(profile.id)
      this.keyNameControl.setValue(profile.keyName)
      this.fullNameControl.setValue(profile.fullName)
      this.titleControl.setValue(profile.title)
      this.aboutControl.setValue(profile.about)
      this.photo = profile.photo
      this.experiences = profile.experiences
      this.skills = profile.skills
    })

    this.experienceUntilNowControl.valueChanges.subscribe(value => {
      if (value) {
        this.experienceEndDateControl.setValue('')
        this.experienceEndDateControl.disable()
      }
      else {
        this.experienceEndDateControl.enable()
      }

    })

    this.skillService.getSkills().then(skills => this.skillOptions = skills)
  }


  onSubmit() {
    if (!this.formProfile.valid)
      return false

    const profile: Profile = {
      id: String(this.idControl.value),
      keyName: String(this.keyNameControl.value),
      fullName: String(this.fullNameControl.value),
      title: String(this.titleControl.value),
      photo: this.photo,
      about: String(this.aboutControl.value),
      experiences: this.experiences,
      skills: this.skills
    }

    if (profile.id)
      this.profileService.updateProfile(profile)
    else
      this.profileService.addProfile(profile)

    return true
  }

  onSubmitNewExperience(): boolean {
    if (!this.formExperience.valid)
      return false

    const untilNow = Boolean(this.experienceUntilNowControl.value)

    const xp: Experience = {
      title: String(this.experienceTitleControl.value),
      company: String(this.experienceCompanyControl.value),
      startDate: new Date(`${String(this.experienceStartDateControl.value)}T00:00:00`),
      endDate: untilNow ? undefined : new Date(`${String(this.experienceEndDateControl.value)}T00:00:00`),
      untilNow: untilNow,
      description: String(this.experienceDescriptionControl.value)
    }

    this.experiences.push(xp)

    return true
  }

  editExperience() {

  }

  setExperienceToDelete(experience: Experience) {
    this.experienceToDelete = experience
  }

  deleteExperienceSelected() {
    if (this.experienceToDelete) {
      const index = this.experiences.indexOf(this.experienceToDelete)
      this.experiences.splice(index, 1)
    }
  }

  onSubmitNewSkill(): boolean {
    if (!this.formSkill.valid)
      return false

    const key = String(this.skillControl.value)

    this.skillService.getSkill(key).then(skill => {
      if (skill)
        this.skills.push(skill)
    })

    return true
  }

  setSkillToDelete(skill: Skill) {
    this.skillToDelete = skill
  }

  deleteSkillSelected() {
    if (this.skillToDelete) {
      const index = this.skills.indexOf(this.skillToDelete)
      this.skills.splice(index, 1)
    }
  }

  changeProfileState(profile: Profile) {
    this.profile$ = new Observable<Profile>(observer => {
      observer.next(profile)
    })
  }

  onFileSelected(event: Event) {
    const element = event.currentTarget as HTMLInputElement
    var files = element.files
    if (files) {
      var file = files[0]
      this.convertFile(file).subscribe(base64 => {
        this.photo = base64
      })
    }
  }

  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1)
    const reader = new FileReader()
    reader.readAsBinaryString(file)
    reader.onload = (event) => {
      if (event.target?.result)
        result.next(btoa(event.target.result.toString()))
    }
    return result
  }

}



