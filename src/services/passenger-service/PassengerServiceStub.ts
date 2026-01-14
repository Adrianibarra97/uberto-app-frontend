import type { PassengerServiceInter } from "./PassengerServiceInter";

export class PassengerServiceStub implements PassengerServiceInter {

	getOneById(userId: number) {
		throw new Error("Method not implemented.");
	}

}