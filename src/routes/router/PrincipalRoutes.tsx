import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { MainLayout } from '../../layouts/main/MainLayout'
import { Home } from '../../pages/home/Home'
import { Services } from '../../pages/services/Services'
import { Contact } from '../../pages/contact/Contact'
import { AuthLayout } from '../../layouts/auth/AuthLayout'

export const PrincipalRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/auth" element = { <AuthLayout /> }>
          {/* <Route path = "login" element = { <LoginPage /> }/> */}
        </Route>
        <Route path = "/" element = { <MainLayout /> }>
          <Route path = "home-passenger" element = { <Home /> }/>
          <Route path = "profile-passenger" element = { <Services /> }/>
          <Route path = "contact" element = { <Contact /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}