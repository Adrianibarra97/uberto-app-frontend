import { FaStar } from 'react-icons/fa6'
import './ReviewComponent.css'
import type { Qualification } from '../../domain/Qualification'
import type { Driver } from '../../domain/User'

interface ReviewComponentProps {
  qualification: Qualification
  driver?: Driver
  deletable?: boolean
  onDelete?: (id: number) => void
}

export const ReviewComponent = ({ qualification, driver, deletable = false, onDelete }: ReviewComponentProps) => {
  return (
    <div className='card-review'>
      <div className='header-review-container'>
        <figure className='figure-review-container'>
          <img
            src={driver?.image ?? '/assets/passengers/default.png'}
            alt={driver?.name ?? 'Driver'}
            className='review_card_image'
          />
        </figure>

        <div className='info-review-container'>
          <p className="review-name">{driver?.name}</p>
          <p className='review-date'>{qualification.date.toLocaleDateString()}</p>
        </div>

        <div className='score-review-container'>
          <FaStar className='score-icon' />
          <p className='score-value'>{qualification.score}</p>
        </div>

        {deletable && (
          <i
            className="fa-solid fa-trash trash-icon"
            onClick={() => onDelete?.(qualification.id)}
          />
        )}
      </div>

      <div className='comment-container'>
        <p className="comment-text">{qualification.description}</p>
      </div>
    </div>
  )
}
