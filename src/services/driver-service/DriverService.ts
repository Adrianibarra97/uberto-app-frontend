import axios from "axios";
import { Driver, type DriverJSON } from "../../domain/User";
import type { DriverServiceInter } from "./DriverServiceInter";
import { URL_BE } from "../config";


export class DriverService implements DriverServiceInter  {
	
	async getAll(): Promise<Driver[]> {
		const promise = await axios.get(URL_BE + 'driver/get-all')
		return promise['data'].map((driverJSON: DriverJSON) =>{
			return Driver.fromJSON(driverJSON)
		})
	}

	async getOneById(id: number): Promise<Driver> {
		const response = await axios.get<DriverJSON>(`${URL_BE}/driver/get-one-by-id?idDriver=${id}`)
		return Driver.fromJSON(response.data)
	}

	async create(driver: Driver): Promise<void> {
		await axios.post(`${URL_BE}/driver/create`, driver.toJSON())
	}

	async update(driver: Driver): Promise<void> {
		if(driver.id > 0) {
			await axios.put(`${URL_BE}/driver/update`, driver.toJSON())
		}
	}

	async delete(id: number): Promise<void> {
		await axios.delete(`${URL_BE}/driver/delete?idDriver=${id}`)
	}

	getAvailableDrivers(): Driver[] {
		throw new Error("Method not implemented.");
	}

};