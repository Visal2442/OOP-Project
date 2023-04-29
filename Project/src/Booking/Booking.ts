import { DateTime } from "../Datetime/DateTime";
import { Trip } from "../Trip/Trip";
import { SeatClass } from "./SeatClass";
import { Passenger } from "../Person/Passenger/Passenger";
import { MealType } from "../Meal/Meal";


export class Booking{
    private seatClass : SeatClass = SeatClass.ECONOMY_CLASSIC;

    constructor(private bookingDatetime : DateTime, 
                private bookingReferenceNumber : string,
                private price : number,
                private depatureTrip : Trip, 
                private passenger : Passenger, 
                private frequentFlyerNumber : string,
                private returnTrip? : Trip){}

    // Get passenger 
    getPassenger():Passenger{
        return this.passenger;
    }

    // Get booking reference number 
    getBookingReferenceNumber():string{
        return this.bookingReferenceNumber;
    }

}