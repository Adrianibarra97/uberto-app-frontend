
import { GridTrips } from '../../../components/grid-trips/GridTrips'
import './ProfileDriverTripsPage.css'

export const ProfileDriverTripsPage = () => {
  return (
    <div className='profile-container-items trips-profile-driver-container'>
      <GridTrips showRating={false} />
    </div>
  )
}