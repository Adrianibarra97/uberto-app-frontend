
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'

export const LoginPage = () => {
  const navigate = useNavigate()

  const navigateToHome = () => {
    return navigate('/home-driver')
  }

  return (
    <div className='login-container'>
      <h1 className='login-title'>Uberto</h1>
      <form className='login-form'>
        <div className="login--info-item">
          <label htmlFor="User">User</label>
          <input
            type="text"
            id="User"
            name="User"
            value="Escribir"
            required
          />
        </div>
        <div className="login--info-item">
          <label className= "" htmlFor="Password">Password</label>
          <input
            type="Password"
            id="SurnaPassworde"
            name="Password"
            value="Messi"
            required
          />
        </div>
        <div className="login-button-container">
          <button className="login-button" onClick={ () => navigateToHome() }>Log On</button>
        </div>
      </form>
    </div>
  )
}