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

export abstract class User {

	constructor() { }
}

export class Passenger extends User {

	constructor() {
		super()
	}
}

export class Driver extends User {
	
	constructor() {
		super()
	}
}