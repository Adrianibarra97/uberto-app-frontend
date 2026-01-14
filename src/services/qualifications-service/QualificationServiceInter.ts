import { Qualification } from '../../domain/Qualification'

export abstract class QualificationServiceInter {

  getQualificationsByUser(userId: number): Qualification[] {
    return [new Qualification(), new Qualification()]
  }
}