import axios from "axios";
import { Passenger, type PassengerJSON } from "../../domain/User";
import type { PassengerServiceInter } from "./PassengerServiceInter";
import { URL_BE } from "../config";

export class PassengerService implements PassengerServiceInter  {

	async getAll(): Promise<Passenger[]> {
		const promise = await axios.get(URL_BE + 'passenger/get-all')
		return promise['data'].map((passengerJSON: PassengerJSON) =>{
			return Passenger.fromJSON(passengerJSON)
		})
	}

	async getOneById(id: number): Promise<Passenger> {
		const response = await axios.get<PassengerJSON>(`${URL_BE}/passenger/get-one-by-id?idPassenger=${id}`)
		return Passenger.fromJSON(response.data)
	}

	async create(passenger: Passenger): Promise<void> {
		await axios.post(`${URL_BE}/passenger/create`, passenger.toJSON())
	}

	async update(passenger: Passenger): Promise<void> {
		if(passenger.id > 0) {
			await axios.put(`${URL_BE}/passenger/update`, passenger.toJSON())
		}
	}

	async delete(id: number): Promise<void> {
		await axios.delete(`${URL_BE}/passenger/delete?idPassenger=${id}`)
	}

};