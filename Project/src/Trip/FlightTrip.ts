import { Flight } from "../Airline/Flight";
import { MealType } from "../Meal/Meal";
import { Seat } from "./SeatNumber";

export class FlightTrip {
  constructor(
    private seatNumber: Seat,
    private flight: Flight,
    private mealType: MealType
  ) {}
  addMeal(meal: MealType): void {
    this.mealType = meal;
  }
  getFlight(): Flight {
    return this.flight;
  }
  getMeal(): MealType {
    return this.mealType;
  }
}
