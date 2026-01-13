import { createContext, useContext, useState, useEffect } from 'react'
import AuthServiceManager from '../services/auth-service/AuthServiceManager'
import { getUserID } from '../services/auth-service/AuthService'
import type { Driver, Passenger, User } from '../domain/User'
import DriverServiceManager from '../services/driver-service/DriverServiceManager'
import PassengerServiceManager from '../services/passenger-service/PassengerServiceManager'

interface UserContextType {
  user: Driver | Passenger | User | null
  updateUser: (newUser: User) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Driver | Passenger | User | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      if(getUserID() > 0) {
        const fetchedUser: User = AuthServiceManager.getInstance().isDriver()
        ? await DriverServiceManager.getInstance().getOneById(getUserID())
        : await PassengerServiceManager.getInstance().getOneById(getUserID())
        setUser(fetchedUser)
      }
    }
    fetchUser()
  }, [])

  const updateUser = (newUser: User) => {
    setUser(newUser)
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider')
  return context
}