import { Trip } from '../../domain/Trip'

export abstract class TripServiceInter {

  getCompletedTrips(userId: number): Trip[] {
    return [new Trip(), new Trip()]
  }
}