import { Flight } from "../../Airline/Flight";
import { Booking } from "../../Booking/Booking";
import { Gate } from "../../Gate/Gate";
import { Person, Gender } from "../Person";

export class Passenger extends Person {
  private bookings: Booking[] = []; 
  constructor(
    firstName: string,
    lastName: string,
    phoneNumber: string,
    gender: Gender
  ) {
    super(firstName, lastName, phoneNumber, gender);
  }
  addBooking(booking: Booking): void {
    this.bookings.push(booking)
  }
  
  // Get which gate does the passenger is going to
  getGateForPassenger(flight:Flight):Gate | undefined {
    for(let booking of this.bookings){
      for(let flightTrip of booking.getDepatureTrip().getFlightTrip()){
        if(flightTrip.getFlight()==flight) {
          return flightTrip.getFlight().getGate();
        }
      }
    }
    return undefined;
  }
}
