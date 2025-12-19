
import { ReviewComponent } from '../card-review-component/ReviewComponent'
import './GridReview.css'

interface GridReviewProps {
  scrollable?: boolean
}

export const GridReview = ({ scrollable = false }: GridReviewProps) => {
  
  return (
    <div
      className={`grid-review-container ${
        scrollable ? 'grid-review-scroll' : ''
      }`}
    >
      <ReviewComponent />
      <ReviewComponent />
      <ReviewComponent />
      <ReviewComponent />
      <ReviewComponent />
      
    </div>
  )
}