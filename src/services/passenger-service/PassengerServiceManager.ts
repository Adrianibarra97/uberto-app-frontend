import { PassengerService } from "./PassengerService"
import type { PassengerServiceInter } from "./PassengerServiceInter"
import { PassengerServiceStub } from "./PassengerServiceStub"


class PassengerServiceManager {

	private static instance: PassengerServiceInter
	private static useStub: boolean = true

	public static getInstance(): PassengerServiceInter {
		if(!PassengerServiceManager.instance) {
			PassengerServiceManager.instance = this.useStub ? new PassengerServiceStub() : new PassengerService()
		}
		return PassengerServiceManager.instance
	}
}

export default PassengerServiceManager