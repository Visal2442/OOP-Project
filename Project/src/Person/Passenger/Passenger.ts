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
  //   get which gate does the passenger go in
  getGateForPassenger(): Gate[] {
    let gates: Gate[] = [];
    for(let booking of this.bookings){
      booking.getDepatureTrip().getFlightTrip().forEach((flightTrip) => {
        gates.push(flightTrip.getFlight().getGate())
      })
    }
    return gates;
  }
}
