
import { Person, Gender } from "../Person";
import { JobCategory } from "./JobCategory";

export class Employee extends Person {
  constructor(
    firstName: string,
    lastName: string,
    phoneNumber: string,
    gender: Gender,
    protected salary: number,
    protected jobCategory: JobCategory
  ) {
    super(firstName, lastName, phoneNumber, gender);
  }

  getFirstName():string{
    return this.firstName;
  }
  getLastName():string{
    return this.lastName;
  }
  getPhoneNumber():string{
    return this.phoneNumber;
  }
  getGender():Gender{
    return this.gender;
  }
  getSalary():number{
    return this.salary;
  }
  getJobCategory():JobCategory{
    return this.jobCategory;
  }
}
