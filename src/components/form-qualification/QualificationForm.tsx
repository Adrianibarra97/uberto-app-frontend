import { useEffect, useState } from "react"
import { Qualification } from "../../domain/Qualification"
import { Trip } from "../../domain/Trip"
import QualificationServiceManager from "../../services/qualifications-service/QualificationServiceManager"
import DriverServiceManager from "../../services/driver-service/DriverServiceManager"
import { Driver } from "../../domain/User"
import './QualificationForm.css'

interface QualificationFormProps {
  trip: Trip
  onClose: () => void
  onCreated?: (tripId: number) => void
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

    // 🔔 Avisamos a la page que este viaje fue calificado
    onCreated?.(trip.id)

    onClose()
  }

  return (
    <div className="modal-overlay">
      <div className="modal">

        {!driver ? (
          <p>Loading...</p>
        ) : (
          <>
            <header className="qualification-header">
              <h2>Rate {driver.name}</h2>
              <i
                className="fa-solid fa-xmark close-icon"
                onClick={onClose}
              />
            </header>

            <div className="qualification-body">
              <img
                src={driver.image}
                alt={driver.name}
                className="driver-avatar"
              />

              <textarea
                placeholder="Tell us about your experience"
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
            </div>

            <footer className="qualification-footer">
              <button
                className="button-component button-cancel"
                onClick={onClose}
                disabled={loading}
              >
                Cancel
              </button>

              <button
                className="button-component button-submit"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Submit'}
              </button>
            </footer>
          </>
        )}

      </div>
    </div>
  )
}
