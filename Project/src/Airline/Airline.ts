import { Employee } from "../Person/Employee/Employee";
import { Flight } from "./Flight";
import { Booking } from "../Booking/Booking";
import { DateTime } from "../Datetime/DateTime";

export class Airline {
  private bookings: Booking[] = [];
  private airlineEmployees: Employee[] = [];

  constructor(private name: string) {}
  // add employee from given flight
  addEmployee(employee: Employee): void {
    this.airlineEmployees.push(employee);
  }
  // Add new booking
  addBooking(booking: Booking): void {
    this.bookings.push(booking);
  }

  // Get bookings
  getBookings(): Booking[] {
    return this.bookings;
  }

  isHasPilot(pilot: Employee): boolean {
    for (let employee of this.airlineEmployees) {
      if (employee.isEqualPilot(pilot)) {
        return true;
      }
    }
    return false;
  }
  // Get flights for given pilot with given date
  getFlightsFor(pilot: Employee, dateTime: DateTime): Flight[] {
    let listOfFlights: Flight[] = [];
    
    if (this.isHasPilot(pilot)) {
      this.bookings.forEach((booking) => {
        booking.getDepatureTrip().getFlightTrip().forEach((flightTrip) => {
            if (
              flightTrip.getFlight().isHasPilot(pilot) &&
              flightTrip.getFlight().getRoute().getDepartureDateTime().isEqualDateTime(dateTime)
            )
            
              listOfFlights.push(flightTrip.getFlight());
          });
      });
    }
    return listOfFlights;
  }
}
