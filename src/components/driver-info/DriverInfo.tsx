import './DriverInfo.css'

export const DriverInfo = () => {
  
  return (
    <div className='driver-info-container'>
      <div className='driver-container'>
            <p className='info-attribute'>Origin</p>
            <p>Calle falsa 333</p>
          </div>

          <div className='driver-container'>
            <p className='info-attribute'>Destination</p>
            <p>Av. siempre viva 555</p>
          </div>

          <div className='driver-container'>
            <p className='info-attribute'>Date</p>
            <p>01/03/2025, 14:00 hs.</p>
          </div>

          <div className='driver-container'>
            <p className='info-attribute'>Duration</p>
            <p>60 minutes</p>
          </div>
    </div>
  )
}