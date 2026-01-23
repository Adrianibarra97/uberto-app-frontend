import { Qualification } from '../../domain/Qualification'

export abstract class QualificationServiceInter {

  getAll(): Promise<Qualification[]>

  getOneById(id: number): Promise<Qualification>

  create(qualification: Qualification): Promise<void>

  update(qualification: Qualification): Promise<void>

  delete(id: number): Promise<void>

  getQualificationsByUser(userId: number): Qualification[] {
    return [new Qualification(), new Qualification()]
  }
  
}