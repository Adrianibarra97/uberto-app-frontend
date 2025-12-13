
import { ReviewComponent } from '../card-review-component/ReviewComponent'
import './GridReview.css'

export const GridReview = () => {
  
  return (
    <div className='grid-review-container'>
     <ReviewComponent />
     <ReviewComponent />
     <ReviewComponent />
     <ReviewComponent />
     <ReviewComponent />
    </div>
  )
}