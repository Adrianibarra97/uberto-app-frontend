import { PASSENGER_SERVICE_USE_STUB } from "../config"
import { PassengerService } from "./PassengerService"
import type { PassengerServiceInter } from "./PassengerServiceInter"
import { PassengerServiceStub } from "./PassengerServiceStub"


class PassengerServiceManager {

	private static instance: PassengerServiceInter
	
	public static getInstance(): PassengerServiceInter {
		if(!PassengerServiceManager.instance) {
			PassengerServiceManager.instance = PASSENGER_SERVICE_USE_STUB ? new PassengerServiceStub() : new PassengerService()
		}
		return PassengerServiceManager.instance
	}
}

export default PassengerServiceManager