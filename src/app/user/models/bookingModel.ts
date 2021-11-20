export class BookingModel {
    constructor(
      public pnr : string,
      public from : string,
      public to: string,
      public departureDate: Date,
      public returnDate: Date,
      public bookerName: string,
      public bookerEmailId: string,
      public bookerContactNumber: string,
      public totalSeats:number,
      public passengers : PassengerModel[]
    ) {
  
    }
  }

  export class PassengerModel {
    constructor(
      public name: string,
      public age : string,
      public meal: string,
      public gender: string,
    ) {
  
    }
  }