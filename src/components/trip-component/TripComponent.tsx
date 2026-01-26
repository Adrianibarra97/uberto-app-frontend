import './TripComponent.css'
import { DivisionComponent } from '../division-component/DivisionComponent'
import type { Trip } from '../../domain/Trip'
import DriverServiceManager from '../../services/driver-service/DriverServiceManager'
import { useEffect, useState } from 'react'
import type { Driver } from '../../domain/User'


interface TripComponentProps {
  trip: Trip
  showRating?: boolean
  onRate?: (trip: Trip) => void
}

// Muestra la info del viaje en una card, muestra el boton de calificar si corresponde y no decide nada global. 

export const TripComponent = ({ trip, showRating = true, onRate }: TripComponentProps) => {

  const [driver, setDriver] = useState<Driver | null>(null)
  
  //Pide su driver y guarda el estado local.
  useEffect(() => {

    const loadDriver = async () => {
      const user = await DriverServiceManager
        .getInstance()
        .getOneById(trip.driverId)

      setDriver(user as Driver)
    }

    loadDriver()

  }, [trip.driverId]) //dependencia si cambia el viaje, cambia el driver

  return (
    <div className='card-trip-container'>
      <div className='trip-header-container'>
        <div className="trip-passengers">
          {driver && (
            <h3 className="trip-title">{driver.name} {driver.surname}</h3>
        )}

          <div className='passengers-count'>
            <p>{trip.amountOfPassengers}</p>
            <i className="fa-solid fa-user-group"></i>
          </div>
        </div>
        <figure className='figure-container'>
          {driver && (
          <img
            src={driver.image}
            alt={driver.name}
            className='card_image'
          />
        )}
        </figure>
      </div>
      
      <div className='trip-middle-container'>
        <div className='middle-information'>
          <p className='middle-information-attribute'>From</p>
          <p className='middle-information-value'>{trip.origin}</p>
        </div>
        <div className='middle-information'>
          <p className='middle-information-attribute'>To</p>
          <p className='middle-information-value'>{trip.destination}</p>
        </div>
        <div className='middle-information'>
          <p className='middle-information-attribute'>Schedule</p>
          <p className='middle-information-value'>{trip.date}</p>
        </div>
        <div className='middle-information'>
          <p className='middle-information-attribute'>Amount</p>
          <p className='middle-information-value'>{trip.amount}</p>
        </div>
      </div>

      {/* showrating = true y el viaje no está calificado entonces aparece el division component */}
      {showRating && !trip.isRated && <DivisionComponent />}
      
      {/*  showrating = true y el viaje no está calificado, aparece el boton para calificar */}
      {showRating && !trip.isRated && (<div className='trip-button-container'>
          <button
              className='trip-button'
              onClick={() => onRate?.(trip)} //El componente NO abre modales, No maneja estado global, 
                                            // No califica nada. Solo comunica al padre (profileTripsPage) que se quiere calificar este viaje.
            >
              I want to rate
            </button>
        </div>) }
    </div>
  )
}