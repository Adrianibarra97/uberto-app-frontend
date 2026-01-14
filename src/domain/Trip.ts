export type TripJSON = {
    id: number,
    origin: string,
    destination: string
    date: string,
    amountOfPassengers: number
}

export class Trip {

    constructor (
        public id: number = -1,
        public origin: string = '',
        public destination: string = '',
        public date: string = '',
        public amountOfPassengers: number = 0
    ) {}

    static fromJSON(tripJSON: TripJSON): Trip {
        return new Trip (
            tripJSON.id, tripJSON.origin, tripJSON.destination,tripJSON.date,tripJSON.amountOfPassengers
        )
    }

    toJSON(): TripJSON {
        return {
            id: this.id,
            origin: this.origin,
            destination: this.destination,
            date: this.date,
            amountOfPassengers: this.amountOfPassengers
        }
    }
}
