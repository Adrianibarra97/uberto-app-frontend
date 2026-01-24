import { Qualification } from '../../domain/Qualification'

export interface QualificationServiceInter {

  getAll(): Promise<Qualification[]>

  getOneById(id: number): Promise<Qualification>

  getQualificationsByUser(userId: number): Promise<Qualification[]>

  create(qualification: Qualification): Promise<Qualification>

  update(qualification: Qualification): Promise<void>
  
  delete(id: number): Promise<void>
}
