import { Link } from 'react-router-dom'
import './Footer.css'
import { FaArrowRightFromBracket, FaCircleUser, FaHouse } from 'react-icons/fa6'

interface FooterProps {
  userType: 'passenger' | 'driver'
}
// Voy a tener que hacer el router dinámico basado en el tipo de usuario que haya logueado. 
export const Footer = ({userType}: FooterProps) => {
  const homeRoute = userType == 'passenger' ? '/home-passenger' : '/home-driver'
  const profileRoute = userType == 'passenger' ? '/profile-passenger' : '/profile-driver'
  
  return (
    <footer className='footer'>
      <nav>
        <ul>
          <li>
            <Link to={homeRoute} aria-label="Home">
              <FaHouse className='footer-icon'/>
            </Link>
          </li>
          <li>
            <Link to={profileRoute} aria-label="Profile">
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
}