import { ButtonComponent } from "../button-component/ButtonComponent"
import './FormPassenger.css'

export const FormPassenger = () => {
  
  return (
    <form className="form-container">
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
      <div className="form-item">
        <label htmlFor="DateTime">Date and Time</label>
        <input 
          type="datetime-local" 
          id="DateTime" 
          name="DateTime"
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