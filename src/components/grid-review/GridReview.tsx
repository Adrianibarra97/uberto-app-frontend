
import { ReviewComponent } from '../card-review-component/ReviewComponent'
import './GridReview.css'

interface GridReviewProps {
  scrollable?: boolean
  deletable?: boolean
}

export const GridReview = ({ scrollable = false,deletable = false }: GridReviewProps) => {
  
  return (
    <div
      className={`grid-review-container ${
        scrollable ? 'grid-review-scroll' : ''
      }`}
    >
      <ReviewComponent deletable={deletable} />
      <ReviewComponent deletable={deletable} />
      <ReviewComponent deletable={deletable} />
      <ReviewComponent deletable={deletable} />
      <ReviewComponent deletable={deletable} />
      
    </div>
  )
}