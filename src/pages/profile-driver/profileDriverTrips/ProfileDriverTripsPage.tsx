import { DivisionComponent } from '../../../components/division-component/DivisionComponent'
import { GridTrips } from '../../../components/grid-trips/GridTrips'
import { TitleComponent } from '../../../components/title-component/TitleComponent'
import './ProfileDriverTripsPage.css'

export const ProfileDriverTripsPage = () => {
  return (
    <div className='profile-container-items'>
      <div className='profile-trips-container'>
        <TitleComponent text="Made" />
        <GridTrips showRating />
      </div>
      <DivisionComponent />
      <div className='profile-trips-container'>
        <TitleComponent text="Pending" />
        <GridTrips showRating={false} />
      </div>
    </div>
  )
}