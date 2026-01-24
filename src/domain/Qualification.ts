
export type QualificationJSON = {
  id: number,
  description: string,
  score: number,
  date: string,
  userId: number,
  driverId: number
}

export class Qualification {
  
  constructor(
    public id: number = -1,
    public description: string = '',
    public score: number = 0,
    public date: Date = new Date(),
    public userId: number = -1,
    public driverId: number = -1 

  ) {}

  static fromJSON(qualificationJSON: QualificationJSON): Qualification {
    return new Qualification(
      qualificationJSON.id,
      qualificationJSON.description,
      qualificationJSON.score,
      new Date(qualificationJSON.date),
      qualificationJSON.userId,
      qualificationJSON.driverId
    )
  }

  toJSON(): QualificationJSON {
    return {
      id: this.id,
      description: this.description,
      score: this.score,
      date: this.date.toISOString(),
      userId: this.userId,
      driverId: this.driverId
    }
  }

}