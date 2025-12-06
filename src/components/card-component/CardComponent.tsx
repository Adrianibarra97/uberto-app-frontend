import { FaStar } from 'react-icons/fa6'
import './CardComponent.css'

export const CardComponent = () => {
  return (
    <>
    <div className='card'>
      <div className='card-header-container'>
        <p className='card-item'>AC 822 WC</p>
        <div className='card-item card-rating'>
          <FaStar />
          <p>5</p>
        </div>
        
      </div>
        
      <div className='card-middle-container'>
        <div className=''>
          <p>$2500</p><p>Ivan de Piñeda</p>
          <p>Fiat Cronos | 2018</p>
          <p>Valor $5670</p>
        </div>
        
        <figure>
          <img src="" alt="" />
        </figure>

      </div>
    </div>
    
    </>
  )
}