import { AirlineModel } from "./AirlineModel";

export class FlightModel {
    constructor(
      public id: number,
      public flightNumber : string,
      public from: string,
      public to: string,
      public totalSeats: number,
      public cost: number,
      public scheduledDates: string,
      public mealType: string,
      public airlineName: string,
      public airlineModel :AirlineModel
    ) {
  
    }
  }