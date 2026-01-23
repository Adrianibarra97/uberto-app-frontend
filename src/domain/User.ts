export type AuthCredentialsLoginDTO = {
	username: string,
	password: string
}

export type AuthCredentialsResponseDTO = {
	authCredentialsID: number,
	typeOfUser: string
}

export type ValidAuthCredentialsDTO = {
	id: number,
	validCode: string
}

export type UserJSON = {
	id: number;
	name: string;
	surname: string;
	image: string;
}

export type PassengerJSON = {
	id: number,
	name: string,
	surname: string,
	telephone: string,
	image: string
}

export type DriverJSON = {
	id: number,
	name: string,
	surname: string,
	image: string,
	basePrice: number
}

export abstract class User {

	constructor(
		public id: number, 
		public name:string,
		public surname:string,
		public image: string
	) {}
	
	toJSON(): UserJSON {
		return {
			id: this.id,
			name: this.name,
			surname: this.surname,
			image: this.image
		}
	}
}

export class Passenger extends User {

	constructor(
		id: number = -1,
		name: string = '', 
		surname: string = '', 
		public telephone: string = '',
		image: string = ''
	) {
		super(
			id,
			name, 
			surname,
			image
		);
	}

	toJSON(): PassengerJSON {
			return {
				...super.toJSON(),
				telephone: this.telephone
			}
		}

	static fromJSON(passengerJSON: PassengerJSON): Passenger {
			return new Passenger (passengerJSON.id,
				passengerJSON.name, passengerJSON.surname, passengerJSON.telephone, passengerJSON.image
			)
		}

		
}

export class Driver extends User {

	constructor(
		id: number,
		name: string,
		surname: string,
		image: string = '',
		public basePrice: number = 0
	) {
		super(id, name, surname, image)
	}

	toJSON(): DriverJSON {
			return {
				...super.toJSON(),
				basePrice: this.basePrice
			}
		}

	static fromJSON(driverJSON: DriverJSON): Driver {
			return new Driver (driverJSON.id,
				driverJSON.name, driverJSON.surname, driverJSON.image, driverJSON.basePrice
			)
		}
}