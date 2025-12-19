import './TripComponent.css'
import ivanpineda from '../../assets/ivanpineda.jpg'
import { DivisionComponent } from '../division-component/DivisionComponent'


interface PropTrip {
  showRating?: boolean
}

export const TripComponent = ({ showRating = true }: PropTrip) => {
  return (
    <div className='card-trip-container'>
      <div className='trip-header-container'>
        <div className="trip-passengers">
          <h3 className="trip-title">Ivan de Pineda</h3>
          <div className='passengers-count'>
            <p>2</p>
            <i className="fa-solid fa-user-group"></i>
          </div>
        </div>
        <figure className='figure-container'>
          <img src={ivanpineda} alt="ivanPineda" className='card_image'/>
        </figure>
      </div>
      
      <div className='trip-middle-container'>
        <div className='middle-information'>
          <p className='middle-information-attribute'>From</p>
          <p className='middle-information-value'>Av.Siempre viva 555</p>
        </div>
        <div className='middle-information'>
          <p className='middle-information-attribute'>To</p>
          <p className='middle-information-value'> Calle falsa 333</p>
        </div>
        <div className='middle-information'>
          <p className='middle-information-attribute'>Schedule</p>
          <p className='middle-information-value'>01/03/2025 | 14:30 15:30 hs</p>
        </div>
        <div className='middle-information'>
          <p className='middle-information-attribute'>Amount</p>
          <p className='middle-information-value'>$14.500</p>
        </div>
      </div>

      {showRating && <DivisionComponent />}
      
      {showRating && (<div className='trip-button-container'>
          <button className='trip-button'>I want to rate</button>
        </div>) }
    </div>
  )
}