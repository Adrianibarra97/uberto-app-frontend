import { AuthServiceInter } from './AuthServiceInter'
import type { AuthCredentialsLoginDTO, AuthCredentialsResponseDTO } from '../../domain/User'
import {USER_ID_TOKEN, USER_TYPE_TOKEN } from '../config'

export class AuthServiceStub extends AuthServiceInter {

	private systemUsers: [AuthCredentialsLoginDTO, AuthCredentialsResponseDTO][] = [

		//Drivers
		[{ username: 'juan.driver', password: '123' }, { authCredentialsID: 1, typeOfUser: "DRIVER" }],
		[{ username: 'ana.driver', password: '123' }, { authCredentialsID: 2, typeOfUser: "DRIVER" }],
		[{ username: 'lucas.driver', password: '123' }, { authCredentialsID: 3, typeOfUser: "DRIVER" }],
		[{ username: 'maria.driver', password: '123' }, { authCredentialsID: 4, typeOfUser: "DRIVER" }],

		//Passengers
		[{ username: 'john.passenger', password: '123' }, { authCredentialsID: 0, typeOfUser: "PASSENGER" }],
		[{ username: 'jane.passenger', password: '123' }, { authCredentialsID: 1, typeOfUser: "PASSENGER" }],
		[{ username: 'lucas.passenger', password: '123' }, { authCredentialsID: 2, typeOfUser: "PASSENGER" }],
		[{ username: 'maria.passenger', password: '123' }, { authCredentialsID: 3, typeOfUser: "PASSENGER" }],
		[{ username: 'adrian.passenger', password: '123' }, { authCredentialsID: 4, typeOfUser: "PASSENGER" }],
		[{ username: 'carolina.passenger', password: '123' }, { authCredentialsID: 5, typeOfUser: "PASSENGER" }]
	]

	constructor() {
		super()
	}

	override login(authCredentialsLoginDTO: AuthCredentialsLoginDTO): void {
		
		const match = this.systemUsers.find(
		([credentials]) =>
			credentials.username === authCredentialsLoginDTO.username &&
			credentials.password === authCredentialsLoginDTO.password
		)

		if (!match) {
		throw new Error('Invalid credentials')
		}

		const [, authResponse] = match

		this.userType = authResponse.typeOfUser
		localStorage.setItem(USER_TYPE_TOKEN, authResponse.typeOfUser)
		localStorage.setItem(USER_ID_TOKEN, authResponse.authCredentialsID.toString())
   }

}