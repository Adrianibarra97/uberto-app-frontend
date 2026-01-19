import { FaStar } from 'react-icons/fa6'
import { Driver } from '../../domain/User'
import './CardComponent.css'

interface CardComponentProps {
  driver: Driver
}

export const CardComponent = ({ driver }: CardComponentProps) => {
  return (
    <div className='card'>
      <div className='card-header-container'>
        <p className='p-item'>{driver.plate}</p>

        <div className='rating-container'>
          <FaStar className='rating-item' />
          <p className='rating-item'>{driver.rating}</p>
        </div>
      </div>
      <div className='card-middle-container'>
        <div className='midddle-information'>
          <p className='text-p1'>{driver.name}</p>
          <p className='text-p2'>
            {driver.carModel} | {driver.carYear}
          </p>
          <p className='text-p3'>Valor ${driver.price}</p>
        </div>

        <figure className='figure-container'>
          <img
            src={driver.imageUrl || 'src/assets/falcon.png'}
            alt={driver.name}
            className='card_image'
          />
        </figure>
      </div>
    </div>
  )
}