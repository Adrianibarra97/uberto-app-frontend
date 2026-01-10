import { TripService } from "./TripService"
import type { TripServiceInter } from "./TripServiceInter"
import { TripServiceStub } from "./TripServiceStub"

class TripServiceManager {

	private static instance: TripServiceInter
	private static useStub: boolean = true

	public static getIntance(): TripServiceInter {
		if(!TripServiceManager.instance) {
			TripServiceManager.instance = this.useStub ? new TripServiceStub() : new TripService()
		}
		return TripServiceManager.instance
	}
}

export default TripServiceManager