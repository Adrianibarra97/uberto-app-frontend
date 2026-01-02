import { DivisionComponent } from '../../components/division-component/DivisionComponent'
import { FormDriver } from '../../components/form-driver/FormDriver'
import { GridTrips } from '../../components/grid-trips/GridTrips'
import { TitleComponent } from '../../components/title-component/TitleComponent'
import './HomeDriverPage.css'

export const HomeDriverPage = () => {
  return (
    <div className='main-layout'>
        <div className='home-container-items'>
          <TitleComponent text='Trips to take' />
          <FormDriver />
        </div>
        <DivisionComponent />
        <div className='home-container-items'>
          <TitleComponent text = 'Results' />
          <GridTrips showRating={false} />
        </div> 
    </div>
  )
}