import { FaStar } from 'react-icons/fa6'
import './CardComponent.css'

export const CardComponent = () => {
  return (
    <>
    <div className='card-container'>
      <div className='card-header-container'>
        <p>AC 822 WC</p>
        <FaStar className='card-item'/>5
      </div>
        
      <div>

        <div>
          <p>Ivan de Piñeda</p>
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