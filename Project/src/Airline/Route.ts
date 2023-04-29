import { Airport } from "../Airport";
import { DateTime } from "../Datetime/DateTime";
export class Route {
  constructor(
    private flightNumber: string,
    private departureAirport: Airport,
    private arrivalAirport: Airport,
    private departureDateTime: DateTime,
    private arrivalDateTime: DateTime
  ) {}
  getDepartureAirport(): Airport{
    return this.departureAirport;
  }
  getArrivalAirport(): Airport{
    return this.departureAirport;
  }
  getDepartureDateTime(): DateTime{
    return this.departureDateTime;
  }
  getArrivalDateTime(): DateTime{
    return this.arrivalDateTime;
  }
  getFlightNumber(): string{    
    return this.flightNumber;
  }

}
