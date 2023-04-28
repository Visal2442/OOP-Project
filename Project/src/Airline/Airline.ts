import { Employee } from "../Person/Employee/Employee";
import { Flight } from "./Flight";
import { Booking } from "../Booking/Booking";
import { DateTime } from "../Datetime/DateTime";

export class Airline {
    private flights :Flight[] = [];
    private bookings : Booking[] = [];

    constructor(private name: string){}

    // Add flight 
    addFlight(flight: Flight){
        this.flights.push(flight);
    }
    
    // Get crew from given flight 
    getCrewFrom(flight: Flight):Employee[]{
        return flight.getCrew();
    }

    // Add new booking 
    addBooking(booking:Booking):void{
        this.bookings.push(booking);
    }

    // Get bookings 
    getBookings():Booking[]{
        return this.bookings;
    }

    // Get flights for given pilot with given date
    getFlightsFor(pilot:Employee, dateTime:DateTime):Flight[]{
        let listOfFlights : Flight[] = [];
        this.flights.forEach(flight=>{
            if(flight.isEqualPilot(pilot) && flight.isEqualDateTime(dateTime)){
                listOfFlights.push(flight)
            }
        })
        return listOfFlights;
    }
}