
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

  /*Verifica que el usuario haya llenado los campos obligatorios (hasRequiredFields()).
  Si no, activa un mensaje de error y termina la ejecución (return)*/
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if(!hasRequiredFields()) {
      setErrorActive(true)
      return
    }

    try {
      setErrorActive(false)

       /* espera a que el login termine
        Este método guarda en localStorage:

        USER_ID_TOKEN → ID del usuario.
        USER_TYPE_TOKEN → "DRIVER" o "PASSENGER".
      */
      await AuthServiceManager.getInstance().login(userLogin) 

      const userId = getUserID() // Obtiene el ID del usuario desde localStorage

      /*
        Mira el valor de userType que se guardó en login().
        Devuelve true si es "DRIVER".
        Dependiendo de eso:
        Si es Driver → busca los datos del driver en DriverServiceManager.
        Si es Passenger → busca los datos del passenger en PassengerServiceManager.
      */
      let user
      if(AuthServiceManager.getInstance().isDriver()) {
        user = await DriverServiceManager.getInstance().getOneById(userId)
      } else {
        user = await PassengerServiceManager.getInstance().getOneById(userId)
      }

      updateUser(user) // Guarda los datos del usuario logueado en tu UserContext.
      updateIsAuthorized(true) // Indica que ahora hay un usuario logueado. Esto activa rutas privadas, menús, etc.

      // redirige según tipo
      if(AuthServiceManager.getInstance().isPassenger()) {
        navigate('/home-passenger')
      } else {
        navigate('/home-driver')
      }

    } catch (err) {
      console.error('Login failed', err)
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