import { Airport } from "./Airport";
import { Airline } from "./Airline/Airline";
import { Airplane } from "./Airline/Airplane";
import { Address } from "./Address/Address";
import { DateTime } from "./Datetime/DateTime";
import { Gate } from "./Gate/Gate";
import { MealType } from "./Meal/Meal";
import { Person, Gender } from "./Person/Person";
import { Employee } from "./Person/Employee/Employee";
import { JobCategory } from "./Person/Employee/JobCategory";
import { Passenger } from "./Person/Passenger/Passenger";
import { Trip } from "./Trip/Trip";
import { Flight } from "./Airline/Flight";
import { Booking } from "./Booking/Booking";

// Create Airports 
let bankok :Airport = new Airport("Sal", "BKK", new Address("371", "BK", "Thailand"));
let singapore :Airport = new Airport("Sal", "SGN", new Address("371", "SG", "Singapore"));
let phnomPenh :Airport = new Airport("Sal", "PNH", new Address("371", "PP", "Cambodia"));
let man :Airport = new Airport("Sal", "MAN", new Address("371", "MAN", "UK"));
let tokyo :Airport = new Airport("Sal", "TKY", new Address("371", "TKY", "Japan"));

// Create Airlines
let airAsia : Airline = new Airline("AirAsia");
let angkorAirway : Airline = new Airline("Angkor Airway");
let finair : Airline = new Airline("Finair");

// Add Airlines to the Airport 
phnomPenh.addAirline(angkorAirway);

// Create Airplane 
let airplane1 : Airplane = new Airplane("AAA");
let airplane2 : Airplane = new Airplane("BBB");
let airplane3 : Airplane = new Airplane("CCC");

// Create Flight 
let flight1 : Flight = new Flight("A-00", phnomPenh, bankok, airplane1, angkorAirway, new DateTime(1, 3, 2023, 10), new DateTime(1, 3, 2023, 11), new Gate("A21"));
let flight2 : Flight = new Flight("B-12", bankok, man, airplane2, finair, new DateTime(2, 3, 2023, 10), new DateTime(3, 3, 2023, 11), new Gate("B20"));
let flight3 : Flight = new Flight("B-12", phnomPenh, singapore, airplane2, airAsia, new DateTime(2, 3, 2023, 10), new DateTime(3, 3, 2023, 11), new Gate("B10"));
let flight4 : Flight = new Flight("B-12", singapore, tokyo, airplane2, angkorAirway, new DateTime(2, 3, 2023, 10), new DateTime(3, 3, 2023, 11), new Gate("C20"));

// Add flight to the Airline 
angkorAirway.addFlight(flight1);

// Create Crew 
let pilot1 : Employee = new Employee("sal", "sal", "2121",Gender.MALE, 400, JobCategory.PILOT);
let pilot2 : Employee = new Employee("sal", "sal", "2121",Gender.MALE, 400, JobCategory.PILOT);

// Add Crew to flight 
flight1.addCrew(pilot1);

// Create Trip 
let trip1 : Trip = new Trip(new DateTime(1, 3, 2023, 11))
trip1.addFlight(flight1);
trip1.addFlight(flight2);

let trip2 : Trip = new Trip(new DateTime(1, 3, 2023, 11))
trip2.addFlight(flight2);
trip2.addFlight(flight3);

// Create Passengers 
let passenger1 : Passenger = new Passenger("Vsial", "sork", "12233", Gender.MALE);

// Create Booking 
let booking1 : Booking = new Booking(new DateTime(20, 2, 2023, 11), "12345", 300, trip1, passenger1, "00000");
angkorAirway.addBooking(booking1);


// TEST --------------------------------
console.log(angkorAirway.getFlightsFor(pilot1, new DateTime(1, 3, 2023, 10)));

// console.log(trip1);
// console.log(angkorAirway.getCrewFrom(flight1));
// console.log(phnomPenh.getPassengerDetailFrom("12345"));








