import type { Passenger } from "../../domain/User"
export interface PassengerServiceInter {
  
  getAll(): Promise<Passenger[]>

  getOneById(id: number): Promise<Passenger>

  create(passenger: Passenger): Promise<void>

  update(passenger: Passenger): Promise<void>

  delete(id: number): Promise<void>

  addFriend(passengerId: number, friendId: number): Promise<void>

  removeFriend(passengerId: number, friendId: number): Promise<void>
}