import { Passenger, type PassengerJSON } from "../../domain/User";
import type { PassengerServiceInter } from "./PassengerServiceInter";

export class PassengerServiceStub implements PassengerServiceInter {

	private objects: Array<PassengerJSON> = [
			{"id": 0,
			 "name": "John",
			 "surname": "Doe",
			 "telephone": "123456789",
			 "image": "/messi.png"
			},
			{"id": 1,
			 "name": "Jane",
			 "surname": "Smith",
			 "telephone": "987654321",
			 "image": "/messi.png"
			},
			{"id": 2,
			 "name": "Lucas",
			 "surname": "Rodriguez",
			 "telephone": "123441678",
			 "image": "/messi.png"
			},
			{"id": 3,
			 "name": "Maria",
			 "surname": "Garcia",
			 "telephone": "987654123",
			 "image": "/messi.png"
			},
			{"id": 5,
			 "name": "Adrian",
			 "surname": "Martinez",
			 "telephone": "555123456",
			 "image": "/messi.png"
			},
			{"id": 6,
			 "name": "Carolina",
			 "surname": "López",
			 "telephone": "555987654",
			 "image": "/messi.png"
			}
		]
	
		async getAll(): Promise<Passenger[]> {
			return this.objects.map<Passenger>(passengerJSON => {
				return Passenger.fromJSON(passengerJSON)
			})
		}

		async getOneById(id: number): Promise<Passenger> {
			let passenger = new Passenger()
			this.objects.forEach(passengerJSON => {
				if (passengerJSON.id === id) passenger = Passenger.fromJSON(passengerJSON)
			})

			return passenger
		}
	
		async update(passenger: Passenger): Promise<void> {
			for (let i = 0; i < this.objects.length; i++) {
				if (this.objects[i].id === passenger.id) {
					this.objects[i] = passenger.toJSON()
				}
			}
		}
	
		async create(passenger: Passenger): Promise<void> {
			this.objects.push(passenger.toJSON())
		}
	
		async delete(id: number): Promise<void> {
			this.objects = this.objects.filter(passengerJSON => passengerJSON.id !== id)
		}
	

}