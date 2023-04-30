import { Employee } from "../Person/Employee/Employee";
import { Flight } from "./Flight";
import { Booking } from "../Booking/Booking";
import { DateTime } from "../Datetime/DateTime";
import { MealType } from "../Meal/Meal";
import { Gate } from "../Gate/Gate";
import { Passenger } from "../Person/Passenger/Passenger";
import { Trip } from "../Trip/Trip";

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

  // Check whether pilot is working in this ariline
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
          if (flightTrip.getFlight().isHasPilot(pilot) && 
          flightTrip.getFlight().getRoute().getDepartureDateTime().isEqualDateTime(dateTime))
              listOfFlights.push(flightTrip.getFlight());
          });
      });
    }
    return listOfFlights;
  }

  // get all meal for a flight
  getMealForFlight(flight: Flight): MealType[] {
    let result: MealType[] = [];
    this.bookings.forEach((booking) => {
      booking.getDepatureTrip().getFlightTrip().forEach((flightTrip) => {
          if(flightTrip.getFlight() == flight) {
            result.push(flightTrip.getMeal())
          }
        });
    });
    return result;
  }

  // How much money did airline pay to all employees
  getAllSalaryEmployees(): number {
    let salary: number = 0;
    for (let employee of this.airlineEmployees) {
      salary += employee.getSalary();
    }
    return salary;
  }

  // Get passengerNumber who booked return ticket 
  getPassengerNumber(trip:Trip):number{
    let countPassenger:number = 0;
    this.bookings.forEach(booking=>{
      if(booking.getDepatureTrip()==trip){
        if(booking.getReturnTrip()!= undefined){
          countPassenger+=1
        }
      }
    })
    return countPassenger;
  }

}
