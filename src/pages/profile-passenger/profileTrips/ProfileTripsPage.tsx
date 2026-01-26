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

/*
  El usuario entra a ProfileTripsPage. Se piden los viajes al backend (o stub)

  Se muestran en cards

    Si un viaje:

    está COMPLETED

    y no está calificado (isRated = false)

    aparece el botón “I want to rate”

  El usuario clickea el botón. Se abre un modal con el QualificationForm, el usuario envía la calificación

  Se hacen 2 requests al backend:

    crear la calificación

    actualizar el viaje (isRated = true)

    Se vuelve a pedir la lista de viajes

  React re-renderiza y el botón desaparece
*/

  // Estado: Viaje completados y pendientes
  const [madeTrips, setMadeTrips] = useState<Trip[]>([])
  const [pendingTrips, setPendingTrips] = useState<Trip[]>([])

  // Cuando selectedTrip esta null, no hay modal. Cuando hay un trip el modal se abre.
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null)

  //ProfileTripsPage se comunica con el TripServiceManager para pedir los viajes (backend o stub) y separamos los viajes de completados o pendientes.
  const loadTrips = async () => {
    const trips = await TripServiceManager.getIntance().getAll()
    setMadeTrips(trips.filter(trip => trip.isCompleted))
    setPendingTrips(trips.filter(trip => !trip.isCompleted))
  }

  // Se ejecuta UNA SOLA VEZ. Cuando la page se monta y se cargan los viajes. 
  useEffect(() => {
    loadTrips()
  }, [])

  // Solo cambia el estado de selectedTrip y react vuelve a renderizar.
  const handleRate = (trip: Trip) => {
    setSelectedTrip(trip)
  }
  // Cuando el hijo dice: "ya cree la calificacion", el padre vuelve a cargar los viajes, isRated ya es true, y el boton desaparece.
  const handleQualificationCreated = async () => {
    await loadTrips()
    setSelectedTrip(null)
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
            onCreated={handleQualificationCreated}
          />
        </Modal>
      )}
    </div>
  )
}
