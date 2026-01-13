import type { AuthCredentialsLoginDTO } from '../../domain/User'
import { DRIVER_TYPE, PASSENGER_TYPE, USER_ID_TOKEN } from '../config'


export abstract class AuthServiceInter {

	public userType: string = 'DRIVER'
	
	login(authCredentialsLoginDTO: AuthCredentialsLoginDTO): void {
		console.log(authCredentialsLoginDTO)
	}

	logout(): void {
		localStorage.clear()
	}

	isAuthorized(): boolean {
		return localStorage.getItem(USER_ID_TOKEN) !== null
	}

	isDriver(): boolean {
		return this.userType === DRIVER_TYPE
	}

	isPassenger(): boolean {
		return this.userType === PASSENGER_TYPE
	}
}