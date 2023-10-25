export interface Profile {
  id: string,
  keyName: string,
  fullName: string,
  title: string,
  photo: string,
  about: string,
  experiences: Experience[],
  skills: Skill[]
}

export interface Experience {
  title: string,
  company: string,
  startDate: Date,
  endDate?: Date,
  untilNow: boolean,
  description: string
}

export interface Skill {
  key: string,
  ico: string,
  name: string
}