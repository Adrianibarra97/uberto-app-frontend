import { useEffect, useState } from 'react'
import { DivisionComponent } from '../../../components/division-component/DivisionComponent'
import { GridTrips } from '../../../components/grid-trips/GridTrips'
import { TitleComponent } from '../../../components/title-component/TitleComponent'
import './ProfileTripsPage.css'
import type { Trip } from '../../../domain/Trip'
import { QualificationForm } from '../../../components/form-qualification/QualificationForm'
import TripServiceManager from '../../../services/trip-service/TripServiceManager'

export const ProfileTripsPage = () => {

  const [madeTrips, setMadeTrips] = useState<Trip[]>([])
  const [pendingTrips, setPendingTrips] = useState<Trip[]>([])
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null)

  useEffect(() => {
  
    TripServiceManager.getIntance().getAll().then(trips => {
      setMadeTrips(trips.filter(trip => trip.isCompleted))
      setPendingTrips(trips.filter(trip => !trip.isCompleted))
    })
    
  }, [])
  
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
        <QualificationForm
          trip={selectedTrip}
          onClose={() => setSelectedTrip(null)}
        />
      )}
    </div>
  )
}