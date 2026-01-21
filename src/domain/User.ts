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
}

export type PassengerJSON = {
	id: number,
	name: string,
	surname: string,
	telephone: string
}
export abstract class User {

	constructor(
		public id: number, 
		public name:string,
		public surname:string,
	) {}
	
	toJSON(): UserJSON {
		return {
			id: this.id,
			name: this.name,
			surname: this.surname
		}
	}
}

export class Passenger extends User {

	constructor(
		id: number = -1,
		name: string = '', 
		surname: string = '', 
		public telephone: string = ''
	) {
		super(
			id,
			name, 
			surname
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
				passengerJSON.name, passengerJSON.surname, passengerJSON.telephone
			)
		}

		
}

export class Driver extends User {
	
	constructor(id: number, name: string, surname: string) {
		super(id, name, surname)
	}
}