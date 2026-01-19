import { Driver } from "../../domain/User"

export abstract class DriverServiceInter {

  getOneById(userId: number): any {
    console.log('El Driver se logueó correctamente! Id: ', userId)
  }

  getAvailableDrivers(): Driver[] {
    console.log('Te re cabio. Llegó')
    return [new Driver(), new Driver()]
  }
}