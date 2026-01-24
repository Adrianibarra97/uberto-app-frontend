import { Qualification } from '../../domain/Qualification'

export interface QualificationServiceInter {

  getAll(): Promise<Qualification[]>

  getOneById(id: number): Promise<Qualification>

  create(qualification: Qualification): Promise<void>

  update(qualification: Qualification): Promise<void>

  delete(id: number): Promise<void>

  getQualificationsByUser(userId: number): Promise<Qualification[]>
  
}