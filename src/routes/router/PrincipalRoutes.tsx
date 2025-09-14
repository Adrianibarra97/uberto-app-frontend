import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { MainLayout } from '../../layouts/main/MainLayout'
import { Home } from '../../pages/home/Home'
import { Services } from '../../pages/services/Services'
import { Contact } from '../../pages/contact/Contact'

export const PrincipalRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = { <MainLayout /> }>
          <Route path = "home" element = { <Home /> }/>
          <Route path = "services" element = { <Services /> }/>
          <Route path = "contact" element = { <Contact /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}