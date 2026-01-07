import { ButtonComponent } from "../../../components/button-component/ButtonComponent";
import { DivisionComponent } from "../../../components/division-component/DivisionComponent";
import "./ProfileDriverInfoPage.css";


export const ProfileDriverInfoPage = () => {


  return (
    <div className="profile-container-items">
      <form className="form-container-driver-profile">
        <div className="form-item-driver-profile">
          <label htmlFor="Name">Name</label>
          <input 
            type="text" 
            id="Name" 
            name="Name"
            value="Ivan"
            required
          />
        </div>
        <div className="form-item-driver-profile" >
          <label htmlFor="Surname">Surname</label>
          <input 
            type="text"
            id="Surname" 
            name="Surname"
            value="Depineda"
            required
          />
        </div>
        <div className="form-item-driver-profile" >
          <label htmlFor="Base Price">Base Price</label>
          <input 
            type="number"
            id="Base Price" 
            name="Base Price"
            value="13000"
            required
          />
        </div>
      </form>

      <DivisionComponent />
      <h4 className="title-driver-profile">Premium Driver</h4>
      <form className="form-container-driver-profile">
        <div className="form-item-driver-profile">
          <label htmlFor="Name">Name</label>
          <input 
            type="text" 
            id="Name" 
            name="Name"
            value="Ivan"
            required
          />
        </div>
        <div className="form-item-driver-profile" >
          <label htmlFor="Surname">Surname</label>
          <input 
            type="text"
            id="Surname" 
            name="Surname"
            value="Depineda"
            required
          />
        </div>
        <div className="form-item-driver-profile" >
          <label htmlFor="Base Price">Base Price</label>
          <input 
            type="number"
            id="Base Price" 
            name="Base Price"
            value="13000"
            required
          />
        </div>
      </form>
      <div className="button-container-driver-profile">
        <button className="button-component-driver-profile">Save Changes</button>
      </div>
    </div>
      
  );
};


