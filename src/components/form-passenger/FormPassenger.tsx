import { TripSearchValues } from "../../domain/TripSearchValues"
import { ButtonComponent } from "../button-component/ButtonComponent"
import './FormPassenger.css'

interface FormPassengerProps {
  values: TripSearchValues
  onChange: (values: TripSearchValues) => void
  onSearch: () => void
}

export const FormPassenger = ({
  values,
  onChange,
  onSearch

}: FormPassengerProps) => {

  const onChangeOrigin = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(new TripSearchValues(
      e.target.value,
      values.destination,
      values.date,
      values.amountOfPassengers
    ))
  }

  const onChangeDestination = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(new TripSearchValues(
      values.origin,
      e.target.value,
      values.date,
      values.amountOfPassengers
    ))
  }

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(new TripSearchValues(
      values.origin,
      values.destination,
      e.target.value,
      values.amountOfPassengers
    ))
  }

  const onChangePassengers = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(new TripSearchValues(
      values.origin,
      values.destination,
      values.date,
      Number(e.target.value)
    ))
  }

  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault() // evita submit automático . Preguntar nuevamente a Adri
    onSearch()
  }
  
  return (
    <form className="form-container">
      <div className="form-item" >
        <label htmlFor="Origin">Origin</label>
        <input 
          type="text"
          id="Origin" 
          name="Origin"
          value={values.origin}
          onChange={onChangeOrigin}
          required
        />
      </div>
      <div className="form-item" >
        <label htmlFor="Destination">Destination</label>
        <input 
          type="text"
          id="Destination" 
          name="Destination"
          value={values.destination}
          onChange={onChangeDestination}
          required
        />
      </div>
      <div className="form-item">
        <label htmlFor="DateTime">Date and Time</label>
        <input 
          type="datetime-local" 
          id="DateTime" 
          name="DateTime"
          value={values.date}
          onChange={onChangeDate}
          required
        />
      </div>
      <div className="form-item" >
        <label htmlFor="AmountOfPassengers">Amount Of Passengers</label>
        <input 
          type="Number"
          id="AmountOfPassengers" 
          name="AmountOfPassengers"
          value={values.amountOfPassengers}
          onChange={onChangePassengers}
          min={1}
          required
        />
      </div>
      <div className="form-item">
          <ButtonComponent
            type="button"
            onClick={handleSearchClick}
          />
      </div>
    </form>
  )
}