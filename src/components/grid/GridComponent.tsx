import type { Driver } from '../../domain/User'
import { CardComponent } from '../card-component/CardComponent'
import './GridComponent.css'

interface GridComponentProps {
  drivers: Driver[]
}

export const GridComponent = ({drivers}: GridComponentProps) => {
  return (
    <div className='grid-container'>
     {drivers.length === 0 && (
        <p>No drivers available</p>
      )}

      {drivers.map((driver) => (
        <CardComponent
          key={driver}
          driver={driver}
        />
      ))}
    </div>
  )
}