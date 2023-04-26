import { DateTime } from "../Datetime/DateTime";
import { Flight } from "../Airline/Flight";

export class Trip {
    private departureDatetime : DateTime;
    private flights : Flight[]; 
}