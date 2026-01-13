
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { AuthCredentialsLoginDTO, Driver, Passenger } from '../../domain/User'
import AuthServiceManager from '../../services/auth-service/AuthServiceManager'
import DriverServiceManager from '../../services/driver-service/DriverServiceManager'
import PassengerServiceManager from '../../services/passenger-service/PassengerServiceManager'
import { useAuth } from '../../context/AuthContext'
import { useUser } from '../../context/UserContext'
import { getUserID } from '../../services/auth-service/AuthService'
import './LoginPage.css'

export const LoginPage = () => {

  const navigate = useNavigate()
  const { updateIsAuthorized } = useAuth()
  const { updateUser } = useUser()
  const [errorActive, setErrorActive] = useState(false)
  const [userLogin, setUserLogin] = useState({ username: '', password: '' })

  const hasRequiredFields = (): boolean => true // userLogin.username != '' && userLogin.password != ''

  const handleUsername = (value: string) => {
    const authCredentialsLoginDTO: AuthCredentialsLoginDTO = {
      username: value,
      password: userLogin.password
    }
    setUserLogin(authCredentialsLoginDTO)
  }

  const handlePassword = (value: string) => {
    const authCredentialsLoginDTO: AuthCredentialsLoginDTO = {
      username: userLogin.username,
      password: value
    }
    setUserLogin(authCredentialsLoginDTO)
  }

  const handleUserType = () => {
    setTimeout(async () => {
      const userId: number = getUserID()
      if(userId >= 0) {
        if(AuthServiceManager.getInstance().isDriver()) {
          const user: Driver = await DriverServiceManager.getInstance().getOneById(userId)
          updateUser(user)
        } else {
          const user: Passenger = await PassengerServiceManager.getInstance().getOneById(userId)
          updateUser(user)
        }
        updateIsAuthorized(true)
      } else {
        updateIsAuthorized(false)
      }
    }, 500)
  }

  const redirectUserTo = () => {
    setTimeout(async () => {
      if(AuthServiceManager.getInstance().isPassenger()) {
        navigate('/home-passenger')
      } else {
        navigate('/home-driver')
      }
    }, 500)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    if(hasRequiredFields()) {
      setErrorActive(false)
      AuthServiceManager.getInstance().login(userLogin)
      handleUserType()
      redirectUserTo()
    } else {
      setErrorActive(true)
    }
  }

  useEffect(() => {
    localStorage.clear()
  },[])

  return (
    <div className='login-container'>
      <h1 className='login-title'>Uberto</h1>
      <form className='login-form'>
        <div className="login--info-item">
          <label>Username</label>
          <input
            id="username" type="text"
            name="username" onChange={ (e) => handleUsername(e.target.value) }
          />
        </div>
        <div className="login--info-item">
          <label className= "" htmlFor="Password">Password</label>
          <input
            id="password" type="Password"
            name="password" onChange={ (e) => handlePassword(e.target.value) }
          />
        </div>
        <div className="login-button-container">
          <button
            className="login-button"
            onClick={ (e) => handleLogin(e) }
          >Log On</button>
        </div>
      </form>
    </div>
  )
}