import { Qualification, type QualificationJSON } from "../../domain/Qualification"
import type { QualificationServiceInter } from "./QualificationServiceInter"

export class QualificationServiceStub implements QualificationServiceInter {

  private objects: QualificationJSON[] = [
  {
    id: 1,
    description: "The trip was excellent",
    score: 5,
    date: "2023-01-01",
    userId: 1,
    driverId: 10
  },
  {
    id: 2,
    description: "The trip was good",
    score: 4,
    date: "2023-01-02",
    userId: 2,
    driverId: 11
  },
  {
    id: 3,
    description: "The trip was average",
    score: 3,
    date: "2023-01-03",
    userId: 1,
    driverId: 10
  },
  {
    id: 4,
    description: "Terrible experience",
    score: 1,
    date: "2023-01-04",
    userId: 1,
    driverId: 12
  }
]


  private nextId(): number {
    return this.objects.length > 0
      ? Math.max(...this.objects.map(o => o.id)) + 1
      : 1
  }

  async getAll(): Promise<Qualification[]> {
    return this.objects.map(q => Qualification.fromJSON(q))
  }

  async getOneById(id: number): Promise<Qualification> {
    const found = this.objects.find(q => q.id === id)
    return found ? Qualification.fromJSON(found) : new Qualification()
  }

  async getQualificationsByUser(userId: number): Promise<Qualification[]> {
    return this.objects
      .filter(q => q.userId === userId)
      .map(q => Qualification.fromJSON(q))
  }

  async create(qualification: Qualification): Promise<Qualification> {
    const json = qualification.toJSON()
    json.id = this.nextId()

    this.objects.push(json)
    return Qualification.fromJSON(json)
  }

  async update(qualification: Qualification): Promise<void> {
    const index = this.objects.findIndex(q => q.id === qualification.id)
    if (index !== -1) {
      this.objects[index] = qualification.toJSON()
    }
  }

  async delete(id: number): Promise<void> {
    this.objects = this.objects.filter(q => q.id !== id)
  }
}
