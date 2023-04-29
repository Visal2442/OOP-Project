export class DateTime {
  constructor(
    public day: number,
    public month: number,
    public year: number,
    public time: Time
  ) {}
  isEqualDateTime(dateTime: DateTime): boolean {
    if (
      dateTime.day === this.day &&
      dateTime.month === this.month &&
      dateTime.year === this.year &&
      dateTime.time.hour === this.time.hour &&
      dateTime.time.minute === this.time.minute
    ) {
      return true;
    } else {
      return false;
    }
  }
}

export class Time {
  constructor(public hour: number, public minute: number) {}
}
