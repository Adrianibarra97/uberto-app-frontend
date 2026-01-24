import { NavLink, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../Profile/ProfileLayout.css'
import PassengerServiceManager from '../../services/passenger-service/PassengerServiceManager'
import DriverServiceManager from '../../services/driver-service/DriverServiceManager'
import { getUserID, getUserType } from '../../services/auth-service/AuthService'
import type { UserJSON } from '../../domain/User'

export const ProfileLayout = () => {

  const [user, setUser] = useState<UserJSON | null>(null)

  useEffect(() => {
    const loadUser = async () => {
      const userId = getUserID()
      const userType = getUserType()

      if (userId < 0) return

      try {
        if (userType === 'PASSENGER') {
          const passenger = await PassengerServiceManager
            .getInstance()
            .getOneById(userId)

          setUser(passenger.toJSON())
        }

        if (userType === 'DRIVER') {
          const driver = await DriverServiceManager
            .getInstance()
            .getOneById(userId)

          setUser(driver.toJSON())
        }
      } catch (error) {
        console.error('Error loading user profile:', error)
      }
    }

    loadUser()
  }, [])

  return (
    <div className="main-layout">
      <div className="profile-header-container">

        <figure className="figure-profile-container">
          <label className="profile-image-wrapper">

            <img
              src={user?.image || '/assets/default-user.png'}
              alt="profile"
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
                  console.log('Selected image preview:', url)
                  // más adelante: persistir imagen
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
