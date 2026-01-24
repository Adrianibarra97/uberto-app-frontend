import { Trip, type TripJSON } from "../../domain/Trip";
import type { TripServiceInter } from "./TripServiceInter";

export class TripServiceStub implements TripServiceInter {

	private objects: Array<TripJSON> = [
		{
			id: 0,
			origin: "Blanco Encalada 4650",
			destination: "Monroe 2200",
			date: "2026-01-13 14:00:00",
			amountOfPassengers: 2,
			driverId: 1,
			amount: 14500,
    		status: "COMPLETED"
    	},
		{
			id: 1,
			origin: "Av. Cabildo 300",
			destination: "Crisologo Larralde 1500",
			date: "2026-01-13 15:30:00",
			amountOfPassengers: 4,
			driverId: 2,
			amount: 9800,
    		status: "PENDING"
		},
		{
			id: 2,
			origin: "Av. Santa Fe 3500",
			destination: "Av. Callao 1800",
			date: "2026-01-13 16:00:00",
			amountOfPassengers: 1,
			driverId: 3,
			amount: 25500,
    		status: "COMPLETED"
		},
		{
			id: 3,
			origin: "Av. Santa Fe 3500",
			destination: "Av. 9 de Julio 2345",
			date: "2026-01-13 17:00:00",
			amountOfPassengers: 6,
			driverId: 4,
			amount: 11500,
    		status: "PENDING"
		}
	]

	async getAll(): Promise<Trip[]> {
		return this.objects.map<Trip>(tripJSON => {
			return Trip.fromJSON(tripJSON)
		})
	}

	async getOneById(id: number): Promise<Trip> {
		let trip = new Trip()
		this.objects.forEach(tripJSON => {
			if (tripJSON.id === id) trip = Trip.fromJSON(tripJSON)
		})

		return trip
	}

	async update(trip: Trip): Promise<void> {
		for (let i = 0; i < this.objects.length; i++) {
			if (this.objects[i].id === trip.id) {
				this.objects[i] = trip.toJSON()
			}
		}
	}

	async create(trip: Trip): Promise<void> {
		this.objects.push(trip.toJSON())
	}

	async delete(id: number): Promise<void> {
		this.objects = this.objects.filter(tripJSON => tripJSON.id !== id)
	}

	getCompletedTrips(userId: number): [Trip, Trip] {
		throw new Error("Method not implemented.");
	}
}