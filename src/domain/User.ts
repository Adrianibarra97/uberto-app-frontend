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

}

export class Passenger extends User {

}

export class Driver extends User {
	
}