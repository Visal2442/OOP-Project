export enum Gender {
  MALE,
  FEMALE
}

export abstract class Person {
  constructor(
    protected firstName: string,
    protected LastName: string,
    protected phoneNumber: string,
    protected gender: Gender
  ) {}
}
