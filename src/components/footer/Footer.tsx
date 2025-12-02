import { Link } from 'react-router-dom'
import './Footer.css'
import { FaArrowRightFromBracket, FaCircleUser, FaHouse } from 'react-icons/fa6'


// Voy a tener que hacer el router dinámico basado en el tipo de usuario que haya logueado. 
export const Footer = () => (
  <footer className='footer'>
    <nav>
      <ul>
        <li>
          <Link to="/home-passenger" aria-label="Home">
            <FaHouse className='footer-icon'/>
          </Link>
        </li>
        <li>
          <Link to="/profile-passenger" aria-label="Profile">
            <FaCircleUser className='footer-icon'/>
          </Link>
        </li>
        <li>
          <Link to="/login" aria-label="Login">
            <FaArrowRightFromBracket className='footer-icon'/>
          </Link>
        </li>
      </ul>
    </nav>
  </footer>
)