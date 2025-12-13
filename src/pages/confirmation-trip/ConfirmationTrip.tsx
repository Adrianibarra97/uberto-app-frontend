import { DivisionComponent } from '../../components/division-component/DivisionComponent'
import { GridReview } from '../../components/grid-review/GridReview'
import { InfoTrip } from '../../components/info-trip/InfoTrip'
import { TitleComponent } from '../../components/title-component/TitleComponent'
import './ConfirmationTrip.css'


export const ConfirmationTrip = () => {

  const infoTripData = new Map<string,string>([
    ["Origin","Calle falsa 333"],
    ["Destination","Av. siempre viva 555"],
    ["Date","01/03/2025, 14:00 hs."],
    ["Duration","60 minutes"],
    ["Amount of Passengers","1"]
  ]);

  const infoDriverData = new Map<string,string>([
    ["Origin","Calle falsa 333"],
    ["Destination","Av. siempre viva 555"],
    ["Date","01/03/2025, 14:00 hs."],
    ["Duration","60 minutes"]
  ]);

  return (
    <div className='main-layout'>

      <div className='trip-info-container'>
        <TitleComponent text="Confirm Trip" />
        <InfoTrip map = {infoTripData} />
      </div>
      
      <DivisionComponent  />

      <div className='review-info-container'>
          <TitleComponent text="Premium Driver" />
          <InfoTrip map = {infoDriverData} />
      </div>

      <GridReview />
      
      <div className='buttons-container'>
        <button className='button-component button-review-component button-color'>Back</button>  
        <button className='button-component button-review-component'>Continue</button>
      </div> 

      </div>
  )
}

