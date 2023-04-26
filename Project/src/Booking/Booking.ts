import { DateTime } from "../Datetime/DateTime";
import { Trip } from "../Trip/Trip";
import { SeatClass } from "./SeatClass";
import { Passenger } from "../Person/Passenger/Passenger";
import { MealType } from "../Meal/Meal";


export class Booking{
    private returnTrip? : Trip;
    private seatClass : SeatClass = SeatClass.ECONOMY_CLASSIC;
    private meal? : MealType;

    constructor(private bookingDatetime : DateTime, 
                private depatureTrip : Trip, 
                private passenger : Passenger, 
                private bookingReferenceNumber : string,
                private price : number,
                private frequentFlyerNumber : string){}
}