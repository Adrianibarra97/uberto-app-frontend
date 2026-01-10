import { FaPhone } from "react-icons/fa6"
import './FormUserInfo.css'


export const FormUserInfo = () => {
  return (
    <form className="form-info-container">
      <div className="form--info-item">
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="Name"
          name="Name"
          value="Leonel"
          required
        />
      </div>
      <div className="form--info-item">
        <label className= "" htmlFor="Surname">Surname</label>
        <input
          type="text"
          id="Surname"
          name="Surname"
          value="Messi"
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
            value="+54 9 11 1234 5678"
            required
          />
          <FaPhone className="icono-input" />
        </div>
      </div>
      <div className="profile-button-container">
        <button className="profile-button">Save Changes</button>
        <hr className="profile-section-divider" />
      </div>
      <div className="available-money-section">
        <div className="avaiable-money-header">
          <p className="p-money-attribute">Available Money</p> 
          <p className="p-money-value">$300.000</p>
        </div> 
        <div className="form--info-item">
          <label htmlFor="Amount">Amount</label>
          <input
            type="number"
            id="Amount"
            name="Amount"
            min="0"
            step="1"
          />
        </div>
        <div className="profile-button-container">
          <button className="profile-button">Add Money</button>
          <hr className="profile-section-divider" />
        </div>
      </div>
    </form>  
  )
}
