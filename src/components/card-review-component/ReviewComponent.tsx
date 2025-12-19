import { FaStar } from 'react-icons/fa6'
import './ReviewComponent.css'
import messiPhotho from '../../assets/messi.png'

interface ReviewComponentProps {
  deletable?: boolean
}

export const ReviewComponent = ({ deletable = false }: ReviewComponentProps) => {
  return (

    <div className='card-review'>
       <div className='header-review-container'>

          <figure className='figure-review-container'>
          <img src={messiPhotho} alt="" className='review_card_image'/>
          </figure> 

        <div className='info-review-container'>
          <p className="review-name">Leonel Messi</p>
          <p className='review-date'>01/01/2025</p>
        </div>
        

        <div className='score-review-container'>
          <FaStar className='score-icon' />
          <p className='score-value'>5</p>
        </div>

        {deletable && (
        <i
          className="fa-solid fa-trash trash-icon"
          onClick={() => console.log('delete review')}
        />
      )}

       </div>
      <div className='comment-container'>
        <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat laboriosam sed quisquam amet aspernatur quos, nesciunt enim velit dolorem dolores impedit commodi sit iusto iste voluptatum doloribus corrupti illo. Possimus.</p>
      </div>
     </div>
    
  )
}