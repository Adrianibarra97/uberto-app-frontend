import { useState, useEffect } from "react";
import { FormUserInfo } from "../../../components/form-user-info/FormUserInfo";
import "./ProfileInfoPage.css";
import messiImage from "../../../assets/messi.png";
import { type PassengerInfoJSON } from "../../../domain/User";
import PassengerServiceManager from "../../../services/passenger-service/PassengerServiceManager";
import { useUser } from "../../../context/UserContext";

export const ProfileInfoPage = () => {

  const { user } = useUser(); // Obtener el usuario actual del contexto

  const [friends, setFriends] = useState([
    { id: 1, img: messiImage },
    { id: 2, img: messiImage },
    { id: 3, img: messiImage },
  ]);

  const addFriend = () => {
    setFriends([...friends, { id: Date.now(), img: messiImage }]);
  };

  const removeFriend = (id: number) => {
    setFriends(friends.filter((f) => f.id !== id));
  };

  // Estado actual del formulario (lo que el usuario está escribiendo)
  const [passengerForm, setPassengerForm] = useState<PassengerInfoJSON>({
    id: 0,
    name: '',
    surname: '',
    telephone: ''
  });

  // Estado para disparar la carga de datos
  const [shouldLoadData, setShouldLoadData] = useState(true);

  // Cargar datos del pasajero al montar el componente
  useEffect(() => {
    if (shouldLoadData && user?.id) { // Verifica: ¿debo cargar? ¿existe user?.id?
      loadPassengerData();
      setShouldLoadData(false); // Evita cargar infinitas veces
    }
  }, [shouldLoadData, user?.id]);

  const loadPassengerData = async () => {
    if (!user?.id) return;
    const result = await PassengerServiceManager
      .getInstance()
      .getOneById(user.id);
    setPassengerForm(result);  // Se rellena el formulario con los datos
  };

  // Actualizar un campo del formulario
  const handleInputChange = (field: keyof PassengerInfoJSON, value: string | number) => {
    setPassengerForm({
      ...passengerForm,
      [field]: value
    });
  };

  // Guardar cambios
  const savePassengerInfo = async () => {
    await PassengerServiceManager
      .getInstance()
      .update(passengerForm);
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
          <button className="add-button" onClick={addFriend}>+</button>
        </div>
    
        {friends.map(friend => (
          <div key={friend.id} className="friend-item-container">
            <figure className="friend-figure-container">
              <img className="friend-image" src={friend.img} alt="friend" />
            </figure>
            <i
              className="fa-solid fa-trash trash-icon"
              onClick={() => removeFriend(friend.id)}
            ></i>
          </div>
        ))}
      </div>
    </div>
  );
};