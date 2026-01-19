import axios from "axios";
import { Trip, type TripJSON } from "../../domain/Trip";
import { URL_BE } from "../config";
import type { TripServiceInter } from "./TripServiceInter";

export class TripService implements TripServiceInter  {

	async getAll(): Promise<Trip[]> {
		const promise = await axios.get(URL_BE + 'trip/get-all')
		return promise['data'].map((tripJSON: TripJSON) =>{
			return Trip.fromJSON(tripJSON)
		})
	}

	async getOneById(id: number): Promise<Trip> {
		const response = await axios.get<TripJSON>(`${URL_BE}/trip/get-one-by-id?idTrip=${id}`)
		return Trip.fromJSON(response.data)
	}

	async create(trip: Trip): Promise<void> {
		await axios.post(`${URL_BE}/trip/create`, trip.toJSON())
	}

	async update(trip: Trip): Promise<void> {
		if(trip.id > 0) {
			await axios.put(`${URL_BE}/trip/update`, trip.toJSON())
		}
	}

	async delete(id: number): Promise<void> {
		await axios.delete(`${URL_BE}/trip/delete?idTrip=${id}`)
	}

	getCompletedTrips(userId: number): [Trip, Trip] {
		throw new Error("Method not implemented.");
	}
};