import { Driver, type DriverJSON } from "../../domain/User";
import type { DriverServiceInter } from "./DriverServiceInter";

export class DriverServiceStub implements DriverServiceInter {
	
	private objects: Array<DriverJSON> = [
		{
			id: 1,
			name: "Juan",
			surname: "Pérez",
			image: '/assets/drivers/juan.jpg',
			basePrice: 1500
		},
		{
			id: 2,
			name: "Ana",
			surname: "Gómez",
			image: '/assets/drivers/ana.jpg',
			basePrice: 1800
		},
		{
			id: 3,
			name: "Lucas",
			surname: "Fernández",
			image: '/assets/drivers/lucas.jpg',
			basePrice: 1700
		},
		{
			id: 4,
			name: "María",
			surname: "López",
			image: '/assets/drivers/maria.jpg',
			basePrice: 1600
  		}
	]

	
	async getAll(): Promise<Driver[]> {
				return this.objects.map<Driver>(driverJSON => {
					return Driver.fromJSON(driverJSON)
				})
			}
	
	async getOneById(id: number): Promise<Driver> {
		const driverJSON = this.objects.find(d => d.id === id)

		if (!driverJSON) {
			throw new Error(`Driver with id ${id} not found`)
		}

		return Driver.fromJSON(driverJSON)
	}

	async update(driver: Driver): Promise<void> {
		for (let i = 0; i < this.objects.length; i++) {
			if (this.objects[i].id === driver.id) {
				this.objects[i] = driver.toJSON()
			}
		}
	}

	async create(driver: Driver): Promise<void> {
		this.objects.push(driver.toJSON())
	}

	async delete(id: number): Promise<void> {
		this.objects = this.objects.filter(driverJSON => driverJSON.id !== id)
	}

	getAvailableDrivers(): Driver[] {
		throw new Error("Method not implemented.");
	}

}