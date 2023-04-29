import { Flight } from "../Airline/Flight";
import { MealType } from "../Meal/Meal";
import { Seat } from "./SeatNumber";

export class FlightTrip {
    private mealType?: MealType;
    constructor(private seatNumber: Seat,private flight: Flight){}
    addMeal(meal: MealType): void{
        this.mealType = meal;
    }
    getFlight(): Flight{
        return this.flight;
    }
}