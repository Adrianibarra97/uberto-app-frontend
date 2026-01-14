import type { Trip } from "../../domain/Trip";

export abstract class TripServiceInter {

    getAll(): Promise<Trip[]>

    getOneById(id: number): Promise<Trip>

    create(passenger: Trip): Promise<void>

    update(passenger: Trip): Promise<void>

    delete(id: number): Promise<void>
}