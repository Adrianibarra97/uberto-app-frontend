import { TripService } from "./TripService"
import type { TripServiceInter } from "./TripServiceInter"
import { TripServiceStub } from "./TripServiceStub"
import { TRIP_SERVICE_USE_STUB } from '../config'

class TripServiceManager {

	private static instance: TripServiceInter
	
	public static getIntance(): TripServiceInter {
		if(!TripServiceManager.instance) {
			TripServiceManager.instance = TRIP_SERVICE_USE_STUB ? new TripServiceStub() : new TripService()
		}
		return TripServiceManager.instance
	}
}

export default TripServiceManager