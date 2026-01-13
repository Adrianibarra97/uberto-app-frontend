import { AuthServiceInter } from './AuthServiceInter'
import type { AuthCredentialsLoginDTO, AuthCredentialsResponseDTO } from '../../domain/User'
import { DRIVER_TYPE, PASSENGER_TYPE, USER_ID_TOKEN, USER_TYPE_TOKEN } from '../config'

export class AuthServiceStub extends AuthServiceInter {

	private systemUsers: [AuthCredentialsLoginDTO, AuthCredentialsResponseDTO][] = [
		[{ username: 'Eche', password: '1234' }, { authCredentialsID: 1, typeOfUser: "DRIVER" }],
		[{ username: 'Caro', password: '1234' }, { authCredentialsID: 2, typeOfUser: "DRIVER" }],
		[{ username: 'Tami', password: '1234' }, { authCredentialsID: 3, typeOfUser: "DRIVER" }],
		[{ username: 'LuckR', password: '1234' }, { authCredentialsID: 4, typeOfUser: "DRIVER" }],
		[{ username: 'Adrian', password: '123' }, { authCredentialsID: 5, typeOfUser: "PASSENGER" }],
		[{ username: 'LuckC', password: '123' }, { authCredentialsID: 6, typeOfUser: "PASSENGER" }]
	]

	constructor() {
		super()
	}

	override login(authCredentialsLoginDTO: AuthCredentialsLoginDTO): void {
		let authCredentialsResponse: AuthCredentialsResponseDTO = { authCredentialsID: 0, typeOfUser: "" }

		if(authCredentialsLoginDTO.username === 'Adrian' || authCredentialsLoginDTO.username === 'Eche') {
			authCredentialsResponse = { authCredentialsID: 6, typeOfUser: DRIVER_TYPE }
		} else {
			authCredentialsResponse = { authCredentialsID: 1, typeOfUser: PASSENGER_TYPE }
		}
		this.userType = authCredentialsResponse.typeOfUser
		localStorage.setItem(USER_TYPE_TOKEN, authCredentialsResponse.typeOfUser)
		localStorage.setItem(USER_ID_TOKEN, authCredentialsResponse.authCredentialsID.toString())
	}
}