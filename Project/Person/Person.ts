import { Gender } from "./Gender";

export abstract class Person {
  constructor(
    protected firstName: string,
    protected LastName: string,
    protected phoneNumber: string,
    protected gender: Gender
  ) {}
}
