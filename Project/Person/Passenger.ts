import { Gender } from "./Gender";
import { Person } from "./Person";

export class Passenger extends Person {
  constructor(
    firstName: string,
    lastName: string,
    phoneNumber: string,
    gender: Gender
  ) {
    super(firstName, lastName, phoneNumber, gender);
  }
}
