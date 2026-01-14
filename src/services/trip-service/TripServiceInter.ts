import type { Trip } from "../../domain/Trip";

export interface TripServiceInter {

    getAll(): Promise<Trip[]>

    getOneById(id: number): Promise<Trip>

    create(trip: Trip): Promise<void>

    update(trip: Trip): Promise<void>

    delete(id: number): Promise<void>

    getCompletedTrips(userId: number): [Trip, Trip]
  
}