import { TripComponent } from '../trip-component/TripComponent'
import './GridTrips.css'

interface GridTripsProps {
  showRating?: boolean
}

export const GridTrips = ({showRating}: GridTripsProps) => {
  
  return (
    <div className='grid-container'>
      <TripComponent showRating={showRating} />
      <TripComponent showRating={showRating} />
      <TripComponent showRating={showRating} />
    </div>
  )
}