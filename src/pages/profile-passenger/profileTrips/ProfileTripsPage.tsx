import { useEffect, useState } from 'react'
import { DivisionComponent } from '../../../components/division-component/DivisionComponent'
import { GridTrips } from '../../../components/grid-trips/GridTrips'
import { TitleComponent } from '../../../components/title-component/TitleComponent'
import './ProfileTripsPage.css'
import type { Trip } from '../../../domain/Trip'
import { QualificationForm } from '../../../components/form-qualification/QualificationForm'
import TripServiceManager from '../../../services/trip-service/TripServiceManager'
import { Modal } from '../../../components/modal/Modal'

export const ProfileTripsPage = () => {

  //vaijes realizados y pendientes
  const [madeTrips, setMadeTrips] = useState<Trip[]>([])
  const [pendingTrips, setPendingTrips] = useState<Trip[]>([])

  //viaje seleccionado para calificar. En caso de que sea null, no se muestra el modal.
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null)

  useEffect(() => {
    
    //obtenemos todos los viajes sean del stub o backend. Los separamos en realizados y pendientes y luego actualiza el estado. React-renderiza
    TripServiceManager.getIntance().getAll().then(trips => {
      setMadeTrips(trips.filter(trip => trip.isCompleted))
      setPendingTrips(trips.filter(trip => !trip.isCompleted))
    })
    
  }, [])
  
  //Evento: calificar un viaje. Cuando el usuario hace click en I want to rate: TripComponent llama onRate(trip), GridTrips propaga el evento, 
  // ProfileTripsPage recibe el trip. Guarda ese trip en el estado. Esto dispara el modal. 
  
  const handleRate = (trip: Trip) => {
    setSelectedTrip(trip)
  }

  return (
    <div className='profile-container-items'>
      <div className='profile-trips-container'>
        <TitleComponent text="Made" />
        <GridTrips
          trips={madeTrips}
          showRating
          onRate={handleRate}
        />
      </div>
      <DivisionComponent />
      <div className='profile-trips-container'>
        <TitleComponent text="Pending" />
        <GridTrips
          trips={pendingTrips}
          showRating={false}
        />
      </div>

      {selectedTrip && (
        <Modal onClose={() => setSelectedTrip(null)}>
          <QualificationForm
            trip={selectedTrip}
            onClose={() => setSelectedTrip(null)}
          />
        </Modal>
      )}

    </div>
  )
}