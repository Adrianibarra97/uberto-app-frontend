import { Link, Outlet } from 'react-router-dom'

import '../../css/index.css'
import '../Profile/ProfileLayout.css'
import { DivisionComponent } from '../../components/division-component/DivisionComponent'
import messiImage from '../../assets/messi.png'

export const ProfileLayout = () => {
  return (

    <div className='main-layout'>
      <div className='profile-header-container'>
        <figure className='figure-profile-container'>
          <img src={messiImage} alt="messi" className='profile_card_image'/>
        </figure>
        <nav className='profile-nav-container'>
          <ul className='profile-ul-container'>
            <li>
              <Link to='info' aria-label="UserInfo">
                <p>Info</p>
              </Link>
            </li>
            <li>
              <Link to='trips' aria-label="InfoTrip">
                <p>Trips</p>
              </Link>
            </li>
            <li>
              <Link to='info' aria-label="Infoqualifications">
                <p>Qualifications</p>
              </Link>
            </li>
          </ul>
        </nav>
        <DivisionComponent />
      </div>
      <Outlet />
    </div>
     

    

  )
}