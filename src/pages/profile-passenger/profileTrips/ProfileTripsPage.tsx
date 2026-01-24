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

  const [madeTrips, setMadeTrips] = useState<Trip[]>([])
  const [pendingTrips, setPendingTrips] = useState<Trip[]>([])
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null)

  const loadTrips = async () => {
    const trips = await TripServiceManager.getIntance().getAll()
    setMadeTrips(trips.filter(trip => trip.isCompleted))
    setPendingTrips(trips.filter(trip => !trip.isCompleted))
  }

  useEffect(() => {
    loadTrips()
  }, [])

  const handleRate = (trip: Trip) => {
    setSelectedTrip(trip)
  }

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
