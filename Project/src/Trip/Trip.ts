import { DateTime } from "../Datetime/DateTime";
import { Flight } from "../Airline/Flight"; 
import { FlightTrip } from "./FlightTrip"; 
import { Baggage } from "../Person/Passenger/Baggage";

export class Trip {
    private flightTrips: FlightTrip[] = [];
    private baggages: Baggage[] = [];
    constructor(private departureDatetime : DateTime, ){};
    addFlightTrip(flightTrip: FlightTrip): void{
        this.flightTrips.push(flightTrip)
    }
    getFlightTrip(): FlightTrip[] {
        return this.flightTrips;
    }
    addBaggage(baggage:Baggage):void{
        this.baggages.push(baggage);
    }
}