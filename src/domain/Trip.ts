export type TripSearchValuesJSON = {
    origin: string,
    destination: string,
    date: string,
    amountOfPassengers: number
}

export type TripJSON = {
    id: number,
    origin: string,
    destination: string
    date: string,
    amountOfPassengers: number,
    driverId: number,
    status: 'PENDING' | 'COMPLETED',
    isRated: boolean,
    amount: number
}

export class Trip {

    constructor (
        public id: number = -1,
        public origin: string = '',
        public destination: string = '',
        public date: string = '',
        public amountOfPassengers: number = 0,
        public driverId: number = -1,
        public status: 'PENDING' | 'COMPLETED' = 'PENDING',
        public isRated: boolean = false,
        public amount: number = 0
    ) {}

    get isCompleted(): boolean {
    return this.status === 'COMPLETED'
  }

    static fromJSON(tripJSON: TripJSON): Trip {
        return new Trip (
            tripJSON.id, 
            tripJSON.origin,
             tripJSON.destination,
             tripJSON.date,
             tripJSON.amountOfPassengers,
             tripJSON.driverId,
             tripJSON.status,
             tripJSON.isRated,
             tripJSON.amount
        )
    }

    toJSON(): TripJSON {
        return {
            id: this.id,
            origin: this.origin,
            destination: this.destination,
            date: this.date,
            amountOfPassengers: this.amountOfPassengers,
            driverId: this.driverId,
            status: this.status,
            isRated: this.isRated,
            amount: this.amount
        }
    }
}
