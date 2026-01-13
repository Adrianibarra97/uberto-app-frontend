import { Navigate, Outlet } from 'react-router-dom'
import AuthServiceManager from '../../services/auth-service/AuthServiceManager'

export const ProtectedRoutes = () => {

  const isAuthorized: boolean = AuthServiceManager.getInstance().isAuthorized()

  if(isAuthorized) {
    return <Outlet />
  }
  return <Navigate to="/auth/login" />
}