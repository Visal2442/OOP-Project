import { Address } from "./Address/Address";
import { Airline } from "./Airline/Airline";
import { Booking } from "./Booking/Booking";
import { Gate } from "./Gate/Gate";
import { Passenger } from "./Person/Passenger/Passenger";

export class Airport {
  private gates: Gate[] = [];
  private airlines :Airline[] = [];
  constructor(
    private name: string,
    private letterCode: string,
    private address: Address
  ) {}

  addGate(gate: Gate) {
    this.gates.push(gate);
  }

  // Get passenger's trip detail by given booking reference number 
  getPassengerDetailFrom(bookingReference: string):Booking | undefined{
      for(let airline of this.airlines){
        for(let booking of airline.getBookings()){
          if(booking.getBookingReferenceNumber() === bookingReference){
            return booking;
          };
        }
      }
      return undefined;
  }

  addAirline(airline:Airline):void{
    this.airlines.push(airline);
  }
}

// let add = new Address('371', 'Phnom Penh', 'Cambodia')
// let airport = new Airport("Ronan", "RON", add);

// let gate1 = new Gate('A1')
// let gate2 = new Gate('A2')
// let gate3 = new Gate('A3')
// let gate4 = new Gate('A4')
// let gate5 = new Gate('A5')

// airport.addGate(gate1);
// airport.addGate(gate2);
// airport.addGate(gate3);
// airport.addGate(gate4);
// airport.addGate(gate5);

// console.log(airport);
