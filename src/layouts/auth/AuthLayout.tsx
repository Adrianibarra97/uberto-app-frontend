import { Outlet } from 'react-router-dom'

import '../../css/index.css'

export const AuthLayout = () => {
  return (
    <div>
      <Outlet />
    </div>  
  )
}