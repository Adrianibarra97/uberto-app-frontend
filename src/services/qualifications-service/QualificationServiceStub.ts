import { Qualification, type QualificationJSON } from "../../domain/Qualification";
import type { QualificationServiceInter } from "./QualificationServiceInter";

export class QualificationServiceStub implements QualificationServiceInter {

	private objects: Array<QualificationJSON> = [
				{"id": 0,
				 "description": "The trip was excellent",
				 "score": 5,
				 "date": "2023-01-01",
				 "userId": 1
				},
				{"id": 1,
				 "description": "The trip was good",
				 "score": 4,
				 "date": "2023-01-02",
				 "userId": 2
				},
				{"id": 2,
				 "description": "The trip was average",
				 "score": 3,
				 "date": "2023-01-03",
				 "userId": 1
				},
				{"id": 3,
				 "description": "Terrible experience",
				 "score": 1,
				 "date": "2023-01-04",
				 "userId": 1
				}
			]

			async getAll(): Promise<Qualification[]> {
				return this.objects.map<Qualification>(qualificationJSON => {
					return Qualification.fromJSON(qualificationJSON)
				})
			}
			
			async getOneById(id: number): Promise<Qualification> {
				let qualification = new Qualification()
				this.objects.forEach(qualificationJSON => {
					if (qualificationJSON.id === id) qualification = Qualification.fromJSON(qualificationJSON)
				})

				return qualification
			}
		
			async update(qualification: Qualification): Promise<void> {
				for (let i = 0; i < this.objects.length; i++) {
					if (this.objects[i].id === qualification.id) {
						this.objects[i] = qualification.toJSON()
					}
				}
			}
		
			async create(qualification: Qualification): Promise<void> {
				this.objects.push(qualification.toJSON())
			}
		
			async delete(id: number): Promise<void> {
				this.objects = this.objects.filter(qualificationJSON => qualificationJSON.id !== id)
			}

			async getQualificationsByUser(userId: number): Promise<Qualification[]> {
				return this.objects
					.filter(qualification => qualification.userId === userId)
					.map(qualification => Qualification.fromJSON(qualification))
			}
			
}