import { useEffect, useState } from "react";
import { FormUserInfo } from "../../../components/form-user-info/FormUserInfo";
import "./ProfileInfoPage.css";
import { Passenger, type PassengerJSON } from "../../../domain/User";
import PassengerServiceManager from "../../../services/passenger-service/PassengerServiceManager";
import { getUserID } from "../../../services/auth-service/AuthService";

export const ProfileInfoPage = () => {

  // 🧍 Passenger logueado
  const [passengerForm, setPassengerForm] = useState<PassengerJSON>({
    id: 0,
    name: "",
    surname: "",
    telephone: "",
    image: ""
  });

  // Friends actuales
  const [friends, setFriends] = useState<PassengerJSON[]>([]);

  // Candidatos a agregar (NO friends)
  const [availableFriends, setAvailableFriends] = useState<PassengerJSON[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const userId = getUserID();
      if (userId < 0) return;

      const service = PassengerServiceManager.getInstance();

      // Passenger logueado
      const passenger = await service.getOneById(userId);
      setPassengerForm(passenger.toJSON());

      // Friends persistidos
      const currentFriends = await service.getFriends(userId);
      setFriends(currentFriends);

      // Todos los passengers → candidatos
      const allPassengers = await service.getAll();
      const friendIds = currentFriends.map(f => f.id);

      setAvailableFriends(
        allPassengers
          .filter(p => p.id !== userId && !friendIds.includes(p.id))
          .map(p => p.toJSON())
      );
    };

    loadData();
  }, []);

  const handleInputChange = (
    field: keyof PassengerJSON,
    value: string | number
  ) => {
    setPassengerForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const savePassengerInfo = async () => {
    const passenger = Passenger.fromJSON(passengerForm);
    await PassengerServiceManager.getInstance().update(passenger);
  };

  const removeFriend = async (friendId: number) => {
    const userId = getUserID();
    if (userId < 0) return;

    const service = PassengerServiceManager.getInstance();
    await service.removeFriend(userId, friendId);

    const removed = friends.find(f => f.id === friendId);
    if (!removed) return;

    setFriends(prev => prev.filter(f => f.id !== friendId));
    setAvailableFriends(prev => [...prev, removed]);
  };

 
  const addFriend = async () => {
    const userId = getUserID();
    if (userId < 0) return;
    if (availableFriends.length === 0) return;

    const service = PassengerServiceManager.getInstance();
    const friend = availableFriends[0]; 

    await service.addFriend(userId, friend.id);

    setFriends(prev => [...prev, friend]);
    setAvailableFriends(prev => prev.filter(f => f.id !== friend.id));
  };

  return (
    <div className="profile-container-items">

      {/* 🧍 FORM */}
      <FormUserInfo
        passenger={passengerForm}
        onInputChange={handleInputChange}
        onSaveChanges={savePassengerInfo}
      />

      <div className="friends-container">
        <div className="friends-header">
          <p className="friends-title">Friends</p>
          <button
            className="add-button"
            onClick={addFriend}
            disabled={availableFriends.length === 0}
            title="Add friend"
          >
            +
          </button>
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
