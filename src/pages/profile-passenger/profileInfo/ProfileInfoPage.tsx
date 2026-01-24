import { useEffect, useState } from "react";
import { FormUserInfo } from "../../../components/form-user-info/FormUserInfo";
import "./ProfileInfoPage.css";
import { Passenger, type PassengerJSON } from "../../../domain/User";
import PassengerServiceManager from "../../../services/passenger-service/PassengerServiceManager";
import { getUserID } from "../../../services/auth-service/AuthService";

export const ProfileInfoPage = () => {

  const [passengerForm, setPassengerForm] = useState<PassengerJSON>({
    id: 0,
    name: "",
    surname: "",
    telephone: "",
    image: ""
  });

  const [friends, setFriends] = useState<PassengerJSON[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const userId = getUserID();
      if (userId < 0) return;

      const passengerService = PassengerServiceManager.getInstance();

      // Usuario logueado
      const passenger = await passengerService.getOneById(userId);
      setPassengerForm(passenger.toJSON());

      // Amigos = todos los demás passengers
      const allPassengers = await passengerService.getAll();
      setFriends(
        allPassengers
          .filter(p => p.id !== userId)
          .map(p => p.toJSON())
      );
    };

    loadData();
  }, []);

  const handleInputChange = (
    field: keyof PassengerJSON,
    value: string | number
  ) => {
    setPassengerForm({
      ...passengerForm,
      [field]: value
    });
  };

  const savePassengerInfo = async () => {
    const passenger = Passenger.fromJSON(passengerForm);
    await PassengerServiceManager
      .getInstance()
      .update(passenger);
  };

  const removeFriend = (id: number) => {
    setFriends(prev => prev.filter(friend => friend.id !== id));
  };

  return (
    <div className="profile-container-items">

      <FormUserInfo
        passenger={passengerForm}
        onInputChange={handleInputChange}
        onSaveChanges={savePassengerInfo}
      />

      <div className="friends-container">
        <div className="friends-header">
          <p className="friends-title">Friends</p>
        </div>

        {friends.map(friend => (
          <div key={friend.id} className="friend-item-container">
            <figure className="friend-figure-container">
              <img
                className="friend-image"
                src={friend.image}
                alt={`${friend.name} ${friend.surname}`}
              />
            </figure>

            <span className="friend-name">
              {friend.name} {friend.surname}
            </span>

            <i
              className="fa-solid fa-trash trash-icon"
              onClick={() => removeFriend(friend.id)}
            />
          </div>
        ))}
      </div>

    </div>
  );
};
