import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '../../layouts/main/MainLayout'
import { HomePassengerPage } from '../../pages/home-passenger/HomePassengerPage'
import { AuthLayout } from '../../layouts/auth/AuthLayout'
import { ConfirmationTripPage } from '../../pages/confirmation-trip/ConfirmationTripPage'
import { ProfileLayout } from '../../layouts/Profile/ProfileLayout'
import { ProfileTripsPage } from '../../pages/profile/profileTrips/ProfileTripsPage'
import { ProfileQualificationsPage } from '../../pages/profile/profileQualifications/ProfileQualificationsPage'
import { ProfileInfoPage } from '../../pages/profile/profileInfo/ProfileInfoPage'
import { ErrorPage } from '../../pages/error/ErrorPage'
import { LoginPage } from '../../pages/login/LoginPage'
import { HomeDriverPage } from '../../pages/home-driver/HomeDriverPage'

export const PrincipalRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />}/>
        </Route>

        <Route path="/" element={<MainLayout />}>
          {/*
            Routes Passenger
          */
          }
          <Route path="home-passenger" element={<HomePassengerPage />} />
          <Route path="confirmation-trip" element={<ConfirmationTripPage />} />

          <Route path="profile-passenger" element={<ProfileLayout />}>
            <Route path="info" element={<ProfileInfoPage />} />
            <Route path="trips" element={<ProfileTripsPage />} />
            <Route path="qualifications" element={<ProfileQualificationsPage />} />
          </Route>

          {/*
          Routes driver
          */}
          <Route path="home-driver" element={<HomeDriverPage />} />

          
          
          <Route path = "*" element = { <ErrorPage /> } />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}