export class DateTime {
    constructor(private day: number, private month: number, private year: number, private time: Time ){}
}

export class Time {
    constructor(private hour: number, private minute: number){}
}