import { Passenger, type PassengerJSON, type UserJSON } from "../../domain/User";
import type { PassengerServiceInter } from "./PassengerServiceInter";

export class PassengerServiceStub implements PassengerServiceInter {

  private passengers: PassengerJSON[] = [
    {
      id: 0,
      name: "John",
      surname: "Doe",
      telephone: "123456789",
      image: '/assets/passengers/john.jpg'
    },
    {
      id: 1,
      name: "Jane",
      surname: "Smith",
      telephone: "987654321",
      image: '/assets/passengers/jane.jpg'
    },
    {
      id: 2,
      name: "Lucas",
      surname: "Rodriguez",
      telephone: "123441678",
      image: '/assets/passengers/lucasleonel.jpg'
    },
    {
      id: 3,
      name: "Maria",
      surname: "Garcia",
      telephone: "987654123",
      image: '/assets/passengers/maria.jpg'
    },
    {
      id: 5,
      name: "Adrian",
      surname: "Martinez",
      telephone: "555123456",
      image: '/assets/passengers/adrian.jpg'
    },
    {
      id: 6,
      name: "Carolina",
      surname: "López",
      telephone: "555987654",
      image: '/assets/passengers/carolina.jpg'
    }
  ];

  // Persistencia de amigos
  private friendsMap: Map<number, number[]> = new Map([
    [0, [1, 2]], // Passenger 0 (john) tiene de amigos a los pasajeros 1 (jane) y 2 (lucas)
    [1, [0, 3]], // Passenger 1 (jane) tiene de amigos a los pasajeros 0 (john) y 3 (maria)
    [2, [0]],    // Passenger 2 (lucas) tiene de amigos a los pasajeros 0 (john)
  ]);


  async getAll(): Promise<Passenger[]> {
    return this.passengers.map(p => Passenger.fromJSON(p));
  }

  async getOneById(id: number): Promise<Passenger> {
    const passengerJSON = this.passengers.find(p => p.id === id);
    return passengerJSON ? Passenger.fromJSON(passengerJSON) : new Passenger();
  }

  async create(passenger: Passenger): Promise<void> {
    this.passengers.push(passenger.toJSON());
  }

  async update(passenger: Passenger): Promise<void> {
    const index = this.passengers.findIndex(p => p.id === passenger.id);
    if (index !== -1) {
      this.passengers[index] = passenger.toJSON();
    }
  }

  async delete(id: number): Promise<void> {
    this.passengers = this.passengers.filter(p => p.id !== id);
    this.friendsMap.delete(id);
  }

  async getFriends(passengerId: number): Promise<UserJSON[]> {
    const friendIds = this.friendsMap.get(passengerId) ?? [];

    return this.passengers
      .filter(p => friendIds.includes(p.id))
      .map(p => ({
        id: p.id,
        name: p.name,
        surname: p.surname,
        image: p.image
      }));
  }

  async addFriend(passengerId: number, friendId: number): Promise<void> {
    const current = this.friendsMap.get(passengerId) ?? [];
    if (!current.includes(friendId)) {
      this.friendsMap.set(passengerId, [...current, friendId]);
    }
  }

  async removeFriend(passengerId: number, friendId: number): Promise<void> {
    const current = this.friendsMap.get(passengerId) ?? [];
    this.friendsMap.set(
      passengerId,
      current.filter(id => id !== friendId)
    );
  }
}
