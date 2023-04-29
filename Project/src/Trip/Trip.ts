import { DateTime } from "../Datetime/DateTime";
import { Flight } from "../Airline/Flight"; 
import { FlightTrip } from "./FlightTrip"; 

export class Trip {
    private flightTrips: FlightTrip[] = [];
    constructor(private departureDatetime : DateTime, ){};
    addFlightTrip(flightTrip: FlightTrip): void{
        this.flightTrips.push(flightTrip)
    }
    getFlightTrip(): FlightTrip[] {
        return this.flightTrips;
    }
}