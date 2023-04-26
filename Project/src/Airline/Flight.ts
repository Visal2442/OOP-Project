import { Airline } from "./Airline";
import { Airplane } from "./Airplane";
import { Airport } from "../Airport";
import { DateTime } from "../Datetime/DateTime";
import { Gate } from "../Gate/Gate";
import { Employee } from "../Person/Employee/Employee";

export class Flight {
  private crew: Employee[] = [];

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
}
