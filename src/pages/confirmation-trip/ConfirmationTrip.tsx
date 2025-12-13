import { DivisionComponent } from '../../components/division-component/DivisionComponent'
import { DriverInfo } from '../../components/driver-info/DriverInfo'
import { GridReview } from '../../components/grid-review/GridReview'
import { InfoTrip } from '../../components/info-trip/InfoTrip'
import { TitleComponent } from '../../components/title-component/TitleComponent'
import './ConfirmationTrip.css'


export const ConfirmationTrip = () => {
  return (
    <div className='main-layout'>

      <div className='trip-info-container'>
        <TitleComponent text="Confirm Trip" />
        <InfoTrip />
      </div>
      <DivisionComponent  />

      <div className='review-info-container'>
          <TitleComponent text="Premium Driver" />
          <DriverInfo />
      </div>

        <GridReview />
      
      <div className='buttons-container'>
        <button className='button-review-component'>Continue</button>
        <button className='button-review-component'>Cancel</button>  
      </div> 

      </div>
  )
}

