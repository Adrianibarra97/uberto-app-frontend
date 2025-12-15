import { NavLink, Outlet } from 'react-router-dom'
import messiImage from '../../assets/messi.png'
import '../Profile/ProfileLayout.css'

export const ProfileLayout = () => {
  return (
    <div className="main-layout">
      <div className="profile-header-container">
        <figure className="figure-profile-container">
          <label className="profile-image-wrapper">
            <img
              src={messiImage}
              alt="messi"
              className="profile_card_image"
            />

            <i className="fa-solid fa-camera camera-icon"></i>

            <input
              type="file"
              accept="image/*"
              className="profile-image-input"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  const url = URL.createObjectURL(file)
                  console.log(url)
                }
              }}
            />
          </label>
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
