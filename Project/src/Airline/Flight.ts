import { Airline } from "./Airline";
import { Airplane } from "./Airplane";
import { Airport } from "../Airport";
import { DateTime } from "../Datetime/DateTime";
import { Gate } from "../Gate/Gate";
import { Employee } from "../Person/Employee/Employee";
import { Route } from "./Route";
export class Flight {
  private crews: Employee[] = [];

  constructor(
    private route: Route,
    private airplane: Airplane,
    private airline: Airline,
    private gate: Gate
  ) {}
  getRoute(): Route {
    return this.route;
  }
  addCrew(crew: Employee): void {
    this.crews.push(crew);
  }

  getCrew(): Employee[] {
    return this.crews;
  }

  isEqualPilot(pilot: Employee): boolean {
    for (let crew of this.crews) {
      if (crew.getJobCategory === pilot.getJobCategory) {
        if (
          crew.getFirstName() === pilot.getFirstName() &&
          crew.getLastName() === pilot.getLastName() &&
          crew.getGender() === pilot.getGender() &&
          crew.getPhoneNumber() === pilot.getPhoneNumber() &&
          crew.getSalary() === pilot.getSalary()
        ) {
          return true;
        }
      }
    }
    return false;
  }

  isEqualDateTime(dateTime: DateTime): boolean {
    if (this.route.getDepartureDateTime().isEqualDateTime(dateTime)) {
      return true;
    } else {
      return false;
    }
  }
}
