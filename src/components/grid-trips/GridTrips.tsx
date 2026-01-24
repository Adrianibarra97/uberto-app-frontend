import type { Trip } from '../../domain/Trip'
import { TripComponent } from '../trip-component/TripComponent'
import './GridTrips.css'

interface GridTripsProps {
  trips: Trip[],
  showRating?: boolean
  onRate?: (trip: Trip) => void
}

export const GridTrips = ({trips, showRating, onRate}: GridTripsProps) => {
  
  return (
    <div className='grid-container'>

      {
        trips.map((trip) => (
          <TripComponent 
            key={trip.id}  
            trip={trip}
            showRating={showRating}
            onRate={onRate}    
        />
      ))}
    </div>
  )
}