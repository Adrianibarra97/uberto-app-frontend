import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '../../layouts/main/MainLayout'
import { HomePassengerPage } from '../../pages/home-passenger/HomePassengerPage'
import { AuthLayout } from '../../layouts/auth/AuthLayout'
import { ConfirmationTripPage } from '../../pages/confirmation-trip/ConfirmationTripPage'
import { ProfileLayout } from '../../layouts/Profile/ProfileLayout'
import { ProfileTripsPage } from '../../pages/profile-passenger/profileTrips/ProfileTripsPage'
import { ProfileQualificationsPage } from '../../pages/profile-passenger/profileQualifications/ProfileQualificationsPage'
import { ProfileInfoPage } from '../../pages/profile-passenger/profileInfo/ProfileInfoPage'
import { ErrorPage } from '../../pages/error/ErrorPage'
import { LoginPage } from '../../pages/login/LoginPage'
import { HomeDriverPage } from '../../pages/home-driver/HomeDriverPage'
import { ProfileDriverInfoPage } from '../../pages/profile-driver/profileDriverInfo/ProfileDriverInfoPage'
import { ProfileDriverQualificationsPage } from '../../pages/profile-driver/profileDriverQualifications/ProfileDriverQualificationsPage'
import { ProfileDriverTripsPage } from '../../pages/profile-driver/profileDriverTrips/ProfileDriverTripsPage'
import { ProtectedRoutes } from '../guards/ProtectedRoutes'

const PrincipalRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* AUTH */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
        </Route>

        {/* PROTECTED */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<MainLayout />}>
            <Route path="home-passenger" element={<HomePassengerPage />} />
            <Route path="home-driver" element={<HomeDriverPage />} />
            <Route path="confirmation-trip" element={<ConfirmationTripPage />} />

            <Route path="profile-passenger" element={<ProfileLayout />}>
              <Route path="info" element={<ProfileInfoPage />} />
              <Route path="trips" element={<ProfileTripsPage />} />
              <Route path="qualifications" element={<ProfileQualificationsPage />} />
            </Route>

            <Route path="profile-driver" element={<ProfileLayout />}>
              <Route path="info" element={<ProfileDriverInfoPage />} />
              <Route path="trips" element={<ProfileDriverTripsPage />} />
              <Route path="qualifications" element={<ProfileDriverQualificationsPage />} />
            </Route>

            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default PrincipalRoutes
