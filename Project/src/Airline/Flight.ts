import { Airline } from "./Airline";
import { Airplane } from "./Airplane";
import { Airport } from "../Airport";
import { DateTime } from "../Datetime/DateTime";
import { Gate } from "../Gate/Gate";
import { Employee } from "../Person/Employee/Employee";

export class Flight {
  private crews: Employee[] = [];

  constructor(
    private flightNumber: string,
    private departureAirport: Airport,
    private arrivalAirport: Airport,
    private airplane: Airplane,
    private airline: Airline,
    private departureDateTime: DateTime,
    private arrivalDateTime: DateTime,
    private gate: Gate
  ) {}

  addCrew(crew:Employee):void{
    this.crews.push(crew);
  }

  getCrew():Employee[]{
    return this.crews;
  }

  isEqualPilot(pilot:Employee):boolean{
    for(let crew of this.crews){
      if(crew.getJobCategory === pilot.getJobCategory){
        if( crew.getFirstName() === pilot.getFirstName() &&
            crew.getLastName() === pilot.getLastName()&&
            crew.getGender() === pilot.getGender()&&
            crew.getPhoneNumber() === pilot.getPhoneNumber()&&
            crew.getSalary() === pilot.getSalary()){
            return true;
          }
      }
    }
    return false;
  }

  isEqualDateTime(dateTime:DateTime):boolean{
    if(dateTime.day === this.departureDateTime.day && dateTime.month === this.departureDateTime.month && dateTime.year === this.departureDateTime.year && dateTime.time === this.departureDateTime.time){
      return true;
    }
    else{
      return false;
    }
  }
}
