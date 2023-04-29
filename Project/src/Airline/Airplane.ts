import { Seat } from "../Trip/SeatNumber";

export class Airplane {
    constructor(private registrationNumber: string, private seats: Seat[] = []){}
    addSeat(seat: Seat):void{
        this.seats.push(seat);
    }
}