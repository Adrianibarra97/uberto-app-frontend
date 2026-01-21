import { FaPhone } from "react-icons/fa6"
import './FormUserInfo.css'
import { type PassengerInfoJSON } from "../../domain/User"
import { useState } from "react"

interface FormPassengerInfoProps {
  passenger: PassengerInfoJSON;
  onInputChange: (field: keyof PassengerInfoJSON, value: string | number) => void;
  onSaveChanges: () => void;
}

export const FormUserInfo = ({ passenger, onInputChange, onSaveChanges }: FormPassengerInfoProps) => {
  const [amountToAdd, setAmountToAdd] = useState(0);
  const [availableMoney, setAvailableMoney] = useState(300000);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveChanges();
  };

  const handleAddMoney = (e: React.MouseEvent) => {
    e.preventDefault(); //Evita comportamiento por defecto del botón
    if (amountToAdd > 0) {
      setAvailableMoney(availableMoney + amountToAdd);
      setAmountToAdd(0);
    }
  };

  return (
    <form className="form-info-container" onSubmit={handleSubmit}>
      <div className="form--info-item">
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="Name"
          name="Name"
          value={passenger.name}
          onChange={(e) => onInputChange('name', e.target.value)}
          required
        />
      </div>
      <div className="form--info-item">
        <label className= "" htmlFor="Surname">Surname</label>
        <input
          type="text"
          id="Surname"
          name="Surname"
          value={passenger.surname}
          onChange={(e) => onInputChange('surname', e.target.value)}
          required
        />
      </div>
      <div className="form--info-item">
        <label htmlFor="Telephone">Telephone</label>
        <div className="icon-input-container">
            <input
            type="tel"
            id="Telephone"
            name="Telephone"
            value={passenger.telephone}
            onChange={(e) => onInputChange('telephone', e.target.value)}
            required
          />
          <FaPhone className="icono-input" />
        </div>
      </div>
      <div className="profile-button-container">
        <button type="submit" className="profile-button">Save Changes</button>
        <hr className="profile-section-divider" />
      </div>
      <div className="available-money-section">
        <div className="avaiable-money-header">
          <p className="p-money-attribute">Available Money</p> 
          <p className="p-money-value">${availableMoney.toLocaleString()}</p>
        </div> 
        <div className="form--info-item">
          <label htmlFor="Amount">Amount</label>
          <input
            type="number"
            id="Amount"
            name="Amount"
            min="0"
            step="1"
            value={amountToAdd}
            onChange={(e) => setAmountToAdd(Number(e.target.value))}
          />
        </div>
        <div className="profile-button-container">
          <button type="button" className="profile-button" onClick={handleAddMoney}>Add Money</button>
          <hr className="profile-section-divider" />
        </div>
      </div>
    </form>  
  )
}
