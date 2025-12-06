import { TitleComponent } from '../../components/title-component/TitleComponent'
import './ConfirmationTrip.css'

export const ConfirmationTrip = () => {
  return (
    <div className='main-layout'>
      <TitleComponent text='Confirm Trip' />
      <div className='trip-info-container'>
        <div className='info-container'>
          <p className='info-item'>Origin</p>
          <p className='info-value'>Calle falsa 333</p>
          
          <p className='info-item'>Destination</p>
          <p className='info-value'>Av. siempre viva 555</p>

          <p className='info-item'>Date</p>
          <p className='info-value'>01/03/2025, 14:00 hs.</p>

          <p className='info-item'>Duration</p>
          <p className='info-value'>60 minutes</p>
          
          <p className='info-item'>Amount of passengers</p>
          <p className='info-value'>1</p>
        </div>
      </div>
    </div>
  )
}

