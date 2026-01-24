import { AuthProvider } from "./context/AuthContext"
import { UserProvider } from "./context/UserContext"
import PrincipalRoutes from './routes/router/PrincipalRoutes'



function App() {
  return (
      <AuthProvider>
        <UserProvider>
          <PrincipalRoutes />
        </UserProvider>
      </AuthProvider>
  )
}

export default App