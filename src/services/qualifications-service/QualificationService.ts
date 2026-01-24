import axios from "axios"
import { Qualification, type QualificationJSON } from "../../domain/Qualification"
import { URL_BE } from "../config"
import type { QualificationServiceInter } from "./QualificationServiceInter"

export class QualificationService implements QualificationServiceInter {

  async getAll(): Promise<Qualification[]> {
    const response = await axios.get(`${URL_BE}/qualification/get-all`)
    return response.data.map((q: QualificationJSON) =>
      Qualification.fromJSON(q)
    )
  }

  async getOneById(id: number): Promise<Qualification> {
    const response = await axios.get<QualificationJSON>(
      `${URL_BE}/qualification/get-one-by-id?idQualification=${id}`
    )
    return Qualification.fromJSON(response.data)
  }

  async getQualificationsByUser(userId: number): Promise<Qualification[]> {
    const response = await axios.get(
      `${URL_BE}/qualification/get-by-user?userId=${userId}`
    )
    return response.data.map((q: QualificationJSON) =>
      Qualification.fromJSON(q)
    )
  }

  async create(qualification: Qualification): Promise<Qualification> {
    const response = await axios.post<QualificationJSON>(
      `${URL_BE}/qualification/create`,
      qualification.toJSON()
    )
    return Qualification.fromJSON(response.data)
  }

  async update(qualification: Qualification): Promise<void> {
    if (qualification.id > 0) {
      await axios.put(`${URL_BE}/qualification/update`, qualification.toJSON())
    }
  }

  async delete(id: number): Promise<void> {
    await axios.delete(
      `${URL_BE}/qualification/delete?idQualification=${id}`
    )
  }
}
