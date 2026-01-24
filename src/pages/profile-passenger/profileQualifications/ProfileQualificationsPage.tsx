import { useEffect, useState } from 'react'
import { GridReview } from '../../../components/grid-review/GridReview'
import './ProfileQualificationsPage.css'
import type { Qualification } from '../../../domain/Qualification'
import QualificationServiceManager from '../../../services/qualifications-service/QualificationServiceManager'
import DriverServiceManager from '../../../services/driver-service/DriverServiceManager'
import type { Driver } from '../../../domain/User'
import { getUserID } from '../../../services/auth-service/AuthService'

export const ProfileQualificationsPage = () => {
  const [qualifications, setQualifications] = useState<Qualification[]>([])
  const [driversMap, setDriversMap] = useState<Map<number, Driver>>(new Map())

  useEffect(() => {
    const loadQualifications = async () => {
      
      //Obtener todas las calificaciones
      const allQualifications = await QualificationServiceManager.getIntance().getAll()

      //Filtrar solo las calificaciones del usuario actual
      const userId = getUserID() // Obtengo el ID del usuario logueado
      const userQualifications = allQualifications.filter(qualification => qualification.userId === userId)

      setQualifications(userQualifications)

      //Obtener todos los drivers
      const allDrivers = await DriverServiceManager.getInstance().getAll()
      const map = new Map<number, Driver>()
      allDrivers.forEach(driver => map.set(driver.id, driver))
      setDriversMap(map)
    }

    loadQualifications()
  }, [])

  // Función para borrar una calificación
  const handleDelete = async (id: number) => {
    await QualificationServiceManager.getIntance().delete(id)
    setQualifications(prev =>
      prev.filter(qualification => qualification.id !== id)
    )
  }

  return (
    <div className='profile-container-items'>
      <GridReview
        qualifications={qualifications}
        driversMap={driversMap}
        deletable
        onDelete={handleDelete}
      />
    </div>
  )
}
