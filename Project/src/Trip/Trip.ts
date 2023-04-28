import { DateTime } from "../Datetime/DateTime";
import { Flight } from "../Airline/Flight";

export class Trip {
    private flights : Flight[] = []; 

    constructor(private departureDatetime : DateTime){};

    addFlight(flight: Flight):void{
        this.flights.push(flight);
    }
}