import { DriverService } from "./DriverService"
import type { DriverServiceInter } from "./DriverServiceInter"
import { DriverServiceStub } from "./DriverServiceStub"


class DriverServiceManager {

	private static instance: DriverServiceInter
	private static useStub: boolean = true

	public static getInstance(): DriverServiceInter {
		if(!DriverServiceManager.instance) {
			DriverServiceManager.instance = this.useStub ? new DriverServiceStub() : new DriverService()
		}
		return DriverServiceManager.instance
	}
}

export default DriverServiceManager