export interface PassengerServiceInter {
  
  getOneById(userId: number): any{
    console.log('El Passenger se logueó correctamente! Id: ', userId)
  }
  
}