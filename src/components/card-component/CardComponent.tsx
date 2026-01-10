import { FaStar } from 'react-icons/fa6'
import './CardComponent.css'

export const CardComponent = () => {
  return (
    <div className='card'>
      <div className='card-header-container'>
        <p className='p-item'>AC 822 WC</p>
        <div className='rating-container'>
          <FaStar className='rating-item' />
          <p className='rating-item'>5</p>
        </div>  
      </div>
      <div className='card-middle-container'>
        <div className='midddle-information'>
          <p className='text-p1'>Ivan de Piñeda</p>
          <p className='text-p2'>Dodge Charger | 1970</p>
          <p className='text-p3'>Valor $2500</p>
        </div>
        <figure className='figure-container'>
          <img src="src\assets\falcon.png" alt="toreto" className='card_image'/>
        </figure>

      </div>
    </div>
  )
}