import type { TripSearchValuesJSON } from "../../domain/Trip"
import { ButtonComponent } from "../button-component/ButtonComponent"
import './FormPassenger.css'

interface FormPassengerProps {
  values:   TripSearchValuesJSON  
  onChange: (values: TripSearchValuesJSON) => void
  onSearch: () => void
}

export const FormPassenger = ({
  values,
  onChange,
  onSearch

}: FormPassengerProps) => {

  const onChangeOrigin = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      origin: e.target.value,
      destination: values.destination,
      date: values.date,
      amountOfPassengers: values.amountOfPassengers
    })
  }

  const onChangeDestination = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      origin: values.origin,
      destination: e.target.value,
      date: values.date,
      amountOfPassengers: values.amountOfPassengers
    })
  }

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      origin: values.origin,
      destination: values.destination,
      date: e.target.value,
      amountOfPassengers: values.amountOfPassengers
    })
  }

  const onChangePassengers = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      origin: values.origin,
      destination: values.destination,
      date: values.date,
      amountOfPassengers: Number(e.target.value)
    })
  }

  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault()
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