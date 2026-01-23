import { useEffect, useState } from "react"
import { Qualification } from "../../domain/Qualification"
import { Trip } from "../../domain/Trip"
import QualificationServiceManager from "../../services/qualifications-service/QualificationServiceManager"
import DriverServiceManager from "../../services/driver-service/DriverServiceManager"
import { Driver } from "../../domain/User"


interface QualificationFormProps {
  trip: Trip
  onClose: () => void
  onCreated?: (qualification: Qualification) => void
}

export const QualificationForm = ({
  trip,
  onClose,
  onCreated
}: QualificationFormProps) => {

  const [description, setDescription] = useState('')
  const [score, setScore] = useState(5)
  const [loading, setLoading] = useState(false)
  const [driver, setDriver] = useState<Driver | null>(null)

  const qualificationService = QualificationServiceManager.getIntance()
  const driverService = DriverServiceManager.getInstance()

  useEffect(() => {
    const loadDriver = async () => {
      const user = await driverService.getOneById(trip.driverId)
      setDriver(user as Driver)
    }

    loadDriver()
  }, [trip.driverId, driverService])

  const handleSubmit = async () => {
    if (!description.trim()) return

    //Deshabilitar botones ,evitar doble submit,mostrar feedback visual (“Saving…”, spinner, etc.)
    setLoading(true)

    const qualification = new Qualification(
      -1,
      description,
      score,
      new Date(),
      trip.driverId
    )

    await qualificationService.create(qualification)

    setLoading(false)
    onCreated?.(qualification)
    onClose()
  }

  if (!driver) {
    return <div className="modal">Loading...</div>
  }

  return (
    <div className="modal">
      <h2>Rate {driver.name}</h2>

      <img
        src={driver.image}
        alt={driver.name}
        className="driver-avatar"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <select
        value={score}
        onChange={e => setScore(Number(e.target.value))}
      >
        {[1, 2, 3, 4, 5].map(n => (
          <option key={n} value={n}>
            {n} stars
          </option>
        ))}
      </select>

      <div className="actions">
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? 'Saving...' : 'Submit'}
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  )
}
