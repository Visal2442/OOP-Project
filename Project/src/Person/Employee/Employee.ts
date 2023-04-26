
import { Person, Gender } from "../Person";

export class Employee extends Person {
  constructor(
    firstName: string,
    lastName: string,
    phoneNumber: string,
    gender: Gender,
    private salary: number
  ) {
    super(firstName, lastName, phoneNumber, gender);
  }
}
