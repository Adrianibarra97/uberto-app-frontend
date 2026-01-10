
import { QualificationService } from "./QualificationService"
import type { QualificationServiceInter } from "./QualificationServiceInter"
import { QualificationServiceStub } from "./QualificationServiceStub"

class QualificationServiceManager {

	private static instance: QualificationServiceInter
	private static useStub: boolean = true

	public static getIntance(): QualificationServiceInter {
		if(!QualificationServiceManager.instance) {
			QualificationServiceManager.instance = this.useStub ? new QualificationServiceStub() : new QualificationService()
		}
		return QualificationServiceManager.instance
	}
}

export default QualificationServiceManager