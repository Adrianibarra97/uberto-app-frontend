import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '../../layouts/main/MainLayout'
import { Home } from '../../pages/home/Home'
import { AuthLayout } from '../../layouts/auth/AuthLayout'
import { ConfirmationTripPage } from '../../pages/confirmation-trip/ConfirmationTripPage'
import { ProfileLayout } from '../../layouts/Profile/ProfileLayout'
import { ProfileTripsPage } from '../../pages/profile/profileTrips/ProfileTripsPage'
import { ProfileQualificationsPage } from '../../pages/profile/profileQualifications/ProfileQualificationsPage'
import { ProfileInfoPage } from '../../pages/profile/profileInfo/ProfileInfoPage'
import { ErrorPage } from '../../pages/error/ErrorPage'

export const PrincipalRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          {/* <Route path="login" element={<LoginPage />}/> */}
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route path="home-passenger" element={<Home />} />
          <Route path="confirmation-trip" element={<ConfirmationTripPage />} />
          <Route path="home-driver" element={<Home />} />

          <Route path="profile-passenger" element={<ProfileLayout />}>
            <Route path="info" element={<ProfileInfoPage />} />
            <Route path="trips" element={<ProfileTripsPage />} />
            <Route path="qualifications" element={<ProfileQualificationsPage />} />
          </Route>
          
          <Route path = "*" element = { <ErrorPage /> } />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}