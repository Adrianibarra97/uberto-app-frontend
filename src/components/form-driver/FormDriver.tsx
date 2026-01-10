import { ButtonComponent } from "../button-component/ButtonComponent"
import './FormDriver.css'

export const FormDriver = () => {
  return (
    <form className="form-container">
        <div className="form-item">
        <label htmlFor="User">User</label>
        <input 
          type="text" 
          id="User" 
          name="User"
          required
        />
      </div>
      <div className="form-item" >
        <label htmlFor="Origin">Origin</label>
        <input 
          type="text"
          id="Origin" 
          name="Origin"
          value="Blanco Encalada 4650"
          required
        />
      </div>
      <div className="form-item" >
        <label htmlFor="Destination">Destination</label>
        <input 
          type="text"
          id="Destination" 
          name="Destination"
          value="Lorenzini 2190"
          required
        />
      </div>
      <div className="form-item" >
        <label htmlFor="AmountOfPassengers">Amount Of Passengers</label>
        <input 
          type="Number"
          id="AmountOfPassengers" 
          name="AmountOfPassengers"
          required
        />
      </div>
      <div className="form-item">
          <ButtonComponent />
      </div>
    </form>
  )
}