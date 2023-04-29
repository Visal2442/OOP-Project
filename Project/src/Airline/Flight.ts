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
  isHasPilot(pilot: Employee): boolean {
    for (let employee of this.crews) {
      if (employee.isEqualPilot(pilot)) {
        return true;
      }
    }
    return false;
  }

}
