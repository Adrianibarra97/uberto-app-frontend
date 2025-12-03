import { Outlet } from 'react-router-dom'

import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'

import '../../css/index.css'

//Por efectos prácticos vamos a dejar el MainLayout con el userType como prop, ya que el login no esta desarrollado
interface MainLayoutProps {
  userType: 'passenger' | 'driver'
}

export const MainLayout = ({ userType }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <Outlet />
			<Footer userType={userType} />
    </>
  )
}