import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { MainLayout } from '../../layouts/main/MainLayout'
import { Home } from '../../pages/home/Home'
import { Services } from '../../pages/services/Services'
import { Contact } from '../../pages/contact/Contact'
import { AuthLayout } from '../../layouts/auth/AuthLayout'
import { useState } from 'react'
import { ConfirmationTrip } from '../../pages/confirmation-trip/ConfirmationTrip'

export const PrincipalRoutes = () => {
  // Por ahora 'passenger' por defecto, pero esto debería venir del login/contexto
  const [userType, setUserType] = useState<'passenger' | 'driver'>('passenger')

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          {/* <Route path="login" element={<LoginPage />}/> */}
        </Route>
        <Route path="/" element={<MainLayout userType={userType} />}>
          <Route path="home-passenger" element={<Home />} />
          <Route path="confirmation-trip" element={<ConfirmationTrip />} />
          <Route path="profile-passenger" element={<Services />} />
          <Route path="home-driver" element={<Home />} /> {/* Ruta para drivers */}
          <Route path="profile-driver" element={<Services />} /> {/* Ruta para drivers */}
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}