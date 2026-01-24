import { Driver } from "../../domain/User"

export interface DriverServiceInter {

  getAll(): Promise<Driver[]>

  getOneById(id: number): Promise<Driver>

  create(driver: Driver): Promise<void>

  update(driver: Driver): Promise<void>

  delete(id: number): Promise<void>

  getAvailableDrivers(): Driver[]
}