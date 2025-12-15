import { NavLink, Outlet } from 'react-router-dom'
import messiImage from '../../assets/messi.png'
import '../Profile/ProfileLayout.css'

export const ProfileLayout = () => {
  return (
    <div className="main-layout">
      <div className="profile-header-container">
        <figure className="figure-profile-container">
          <img
            src={messiImage}
            alt="messi"
            className="profile_card_image"
          />
        </figure>
        <nav className="profile-nav-container">
          <ul className="profile-ul-container">
            <li>
              <NavLink to="info">
                <p>Info</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="trips">
                <p>Trips</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="qualifications">
                <p>Qualifications</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </div>
  )
}
