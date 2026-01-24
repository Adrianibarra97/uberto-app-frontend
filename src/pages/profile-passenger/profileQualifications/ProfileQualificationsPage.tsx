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

  const loadQualifications = async () => {
    const userId = getUserID()

    const allQualifications =
      await QualificationServiceManager.getIntance().getAll()

    const userQualifications =
      allQualifications.filter(q => q.userId === userId)

    setQualifications(userQualifications)

    const allDrivers =
      await DriverServiceManager.getInstance().getAll()

    const map = new Map<number, Driver>()
    allDrivers.forEach(driver => map.set(driver.id, driver))
    setDriversMap(map)
  }

  useEffect(() => {
    loadQualifications()
  }, [])

  const handleDelete = async (id: number) => {
    await QualificationServiceManager.getIntance().delete(id)
    await loadQualifications() // 👈 importante
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
