import axios from "axios";
import { Qualification, type QualificationJSON } from "../../domain/Qualification";
import { QualificationServiceInter } from "./QualificationServiceInter";
import { URL_BE } from "../config";

export class QualificationService extends QualificationServiceInter  {

	async getAll(): Promise<Qualification[]> {
		const promise = await axios.get(URL_BE + 'qualification/get-all')
		return promise['data'].map((qualificationJSON: QualificationJSON) =>{
			return Qualification.fromJSON(qualificationJSON)
		})
	}

	async getOneById(id: number): Promise<Qualification> {
		const response = await axios.get<QualificationJSON>(`${URL_BE}/qualification/get-one-by-id?idQualification=${id}`)
		return Qualification.fromJSON(response.data)
	}

	async create(qualification: Qualification): Promise<void> {
		await axios.post(`${URL_BE}/qualification/create`, qualification.toJSON())
	}

	async update(qualification: Qualification): Promise<void> {
		if(qualification.id > 0) {
			await axios.put(`${URL_BE}/qualification/update`, qualification.toJSON())
		}
	}

	async delete(id: number): Promise<void> {
		await axios.delete(`${URL_BE}/qualification/delete?idQualification=${id}`)
	}

};