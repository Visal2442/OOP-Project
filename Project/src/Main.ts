import { Airport } from "./Airport";
import { Airline } from "./Airline/Airline";
import { Airplane } from "./Airline/Airplane";
import { Address } from "./Address/Address";
import { DateTime, Time } from "./Datetime/DateTime";
import { Gate } from "./Gate/Gate";
import { MealType } from "./Meal/Meal";
import { Person, Gender } from "./Person/Person";
import { Employee } from "./Person/Employee/Employee";
import { JobCategory } from "./Person/Employee/JobCategory";
import { Passenger } from "./Person/Passenger/Passenger";
import { Trip } from "./Trip/Trip";
import { Flight } from "./Airline/Flight";
import { Booking } from "./Booking/Booking";
import { Route } from "./Airline/Route";
import { FlightTrip } from "./Trip/FlightTrip";
import { Seat } from "./Trip/SeatNumber";
import { Baggage } from "./Person/Passenger/Baggage";

// Create Airports 
let bankokAirport :Airport = new Airport("Sal", "BKK", new Address("371", "BK", "Thailand"));
let singaporeAirport :Airport = new Airport("Sal", "SGN", new Address("371", "SG", "Singapore"));
let phnomPenhAirport :Airport = new Airport("Sal", "PNH", new Address("371", "PP", "Cambodia"));
let manchesterAirport :Airport = new Airport("Sal", "MAN", new Address("371", "MANchester", "UK"));
let tokyoAirport :Airport = new Airport("Sal", "TKY", new Address("371", "TKY", "Japan"));

// Create Airlines
let airAsia : Airline = new Airline("AirAsia");
let angkorAirway : Airline = new Airline("Angkor Airway");
let finair : Airline = new Airline("Finair");

// Add Airlines to the Airport 
phnomPenhAirport.addAirline(angkorAirway);

// Create Airplane 
let airplane1 : Airplane = new Airplane("AAA");
let airplane2 : Airplane = new Airplane("BBB");
let airplane3 : Airplane = new Airplane("CCC");

// Create Route 
let route1 : Route = new Route("A-00", phnomPenhAirport, bankokAirport, new DateTime(1, 3, 2023, new Time(9,30)), new DateTime(1, 3, 2023, new Time(11,0)));
let route2 : Route = new Route("B-00", bankokAirport, manchesterAirport, new DateTime(1, 3, 2023, new Time(9,30)), new DateTime(1, 3, 2023, new Time(11,0)));

let route3 : Route = new Route("C-00", manchesterAirport, bankokAirport, new DateTime(1, 3, 2023, new Time(9,30)), new DateTime(1, 3, 2023, new Time(11,0)));
let route4 : Route = new Route("D-00", bankokAirport, phnomPenhAirport, new DateTime(1, 3, 2023, new Time(9,30)), new DateTime(1, 3, 2023, new Time(11,0)));

// Create Flight 
let flight1 : Flight = new Flight(route1, airplane1, angkorAirway, new Gate("A21"));
let flight2 : Flight = new Flight(route2, airplane2, finair, new Gate("B20"));
let flight3 : Flight = new Flight(route1, airplane2, airAsia, new Gate("B10"));
let flight4 : Flight = new Flight(route3, airplane2, angkorAirway, new Gate("C20"));

// Create Crew 
let pilot1 : Employee = new Employee("sal", "sal", "2121",Gender.MALE, 400, JobCategory.PILOT);
let pilot2 : Employee = new Employee("reak", "reak", "2121",Gender.MALE, 400, JobCategory.PILOT);

let chef1 : Employee = new Employee("Vi", "reak", "2121",Gender.FEMALE, 120 , JobCategory.CHEF);
let chef2 : Employee = new Employee("reak", "Vi", "2121",Gender.MALE, 120 , JobCategory.CHEF);

let coPilot1 : Employee = new Employee("Vi", "sal", "2121",Gender.MALE, 120 , JobCategory.CHEF);
let coPilot2 : Employee = new Employee("sal", "Vi", "2121",Gender.FEMALE, 120 , JobCategory.CHEF);

let bagHandler1 : Employee = new Employee("Phan", "nit","2121",Gender.MALE , 200 , JobCategory.BAGGAGE_HANDLER)
let bagHandler2 : Employee = new Employee("Phan", "nit","2121",Gender.MALE , 200 , JobCategory.BAGGAGE_HANDLER)

let attendant1 : Employee = new Employee("Phan", "nit","2121",Gender.FEMALE , 200 , JobCategory.ATTENDANT)
let attendant2 : Employee = new Employee("Phan", "nit","2121",Gender.FEMALE , 200 , JobCategory.ATTENDANT)
let attendant3 : Employee = new Employee("Phan", "nit","2121",Gender.FEMALE , 200 , JobCategory.ATTENDANT)
let attendant4 : Employee = new Employee("Phan", "nit","2121",Gender.FEMALE , 200 , JobCategory.ATTENDANT)
let attendant5 : Employee = new Employee("Phan", "nit","2121",Gender.FEMALE , 200 , JobCategory.ATTENDANT)

// Add Crew to flight 
angkorAirway.addEmployee(pilot1)
angkorAirway.addEmployee(pilot2)

flight1.addCrew(pilot1);
flight2.addCrew(pilot1);

// create seats
let seat1: Seat = new Seat('A1');
let seat2: Seat = new Seat('A2');
let seat3: Seat = new Seat('A3');
let seat4: Seat = new Seat('A4');
let seat5: Seat = new Seat('A5');

// Add seats to the airplane
airplane1.addSeat(seat1);
airplane1.addSeat(seat2);
airplane1.addSeat(seat3);
airplane1.addSeat(seat4);
airplane1.addSeat(seat5);

airplane2.addSeat(seat1);
airplane2.addSeat(seat2);
airplane2.addSeat(seat3);
airplane2.addSeat(seat4);
airplane2.addSeat(seat5);

//  create Flight Trip 
let flightTrip1: FlightTrip = new FlightTrip(seat1, flight1, MealType.DAIRY_FREE);
let flightTrip2: FlightTrip = new FlightTrip(seat3, flight1, MealType.FORTH);
let flightTrip3: FlightTrip = new FlightTrip(seat4, flight1, MealType.VEGAN);

// Create Trip 
let trip1 : Trip = new Trip(new DateTime(1, 3, 2023, new Time(11,0)))
trip1.addFlightTrip(flightTrip1);
trip1.addFlightTrip(flightTrip2);

let trip2 : Trip = new Trip(new DateTime(1, 3, 2023, new Time(11,0)))
trip2.addFlightTrip(flightTrip1);
let returnTrip1 : Trip = new Trip(new DateTime(5, 3, 2023, new Time(11,0)))
returnTrip1.addFlightTrip(flightTrip2);
returnTrip1.addFlightTrip(flightTrip3);

let trip3 : Trip = new Trip(new DateTime(5, 10, 2023, new Time(10,0)))
trip2.addFlightTrip(flightTrip2);
trip2.addFlightTrip(flightTrip3);

// Create Passengers 
let passenger1 : Passenger = new Passenger("Vsial", "sork", "0123456789", Gender.MALE);
let passenger2 : Passenger = new Passenger("Johnny", "Kane", "0192345678", Gender.FEMALE);

// Create Booking 
let booking1 : Booking = new Booking(new DateTime(20, 2, 2023, new Time(11,0)), "12345", 300, trip1, passenger1, "00000");
let booking2 : Booking = new Booking(new DateTime(20, 2, 2023, new Time(11,0)), "12345", 300, trip2, passenger1, "00000");
let booking3 : Booking = new Booking(new DateTime(20, 2, 2023, new Time(11,0)), "12345", 300, trip1, passenger1, "00000");

passenger1.addBooking(booking1);

angkorAirway.addBooking(booking1);
angkorAirway.addBooking(booking2);
angkorAirway.addBooking(booking3);

// TEST --------------------------------
// console.log(angkorAirway.getMealForFlight(flight1));
console.log(passenger1.getGateForPassenger(flight1));
;
// console.log(trip1);
// console.log(angkorAirway.getCrewFrom(flight1));
// console.log(phnomPenhAirport.getPassengerDetailFrom("12345"));








