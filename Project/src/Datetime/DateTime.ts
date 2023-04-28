export class DateTime {
    constructor(public day: number, public month: number, public year: number, public time: Time ){}
}

export class Time {
    constructor(public hour: number, public minute: number){}
}