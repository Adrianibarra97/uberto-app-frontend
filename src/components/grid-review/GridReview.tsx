import { ReviewComponent } from '../card-review-component/ReviewComponent'
import './GridReview.css'
import type { Qualification } from '../../domain/Qualification'
import type { Driver } from '../../domain/User'

interface GridReviewProps {
  qualifications: Qualification[]
  driversMap: Map<number, Driver>
  scrollable?: boolean
  deletable?: boolean
  onDelete?: (id: number) => void
}

export const GridReview = ({
  qualifications,
  driversMap,
  scrollable = false,
  deletable = false,
  onDelete
}: GridReviewProps) => {
  return (
    <div
      className={`grid-review-container ${scrollable ? 'grid-review-scroll' : ''}`}
    >
      {qualifications.map(q => (
        <ReviewComponent
          key={q.id}
          qualification={q}
          driver={driversMap.get(q.userId)} // mostramos driver según userId (o driverId si se implementa)
          deletable={deletable}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
