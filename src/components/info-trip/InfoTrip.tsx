import './InfoTrip.css'

export const InfoTrip = () => {
  
  return (
    <div className='info-container'>
      <div className='info-row'>
        <p className='info-attribute'>Origin</p>
        <p>Calle falsa 333</p>
      </div>
      <div className='info-row'>
        <p className='info-attribute'>Destination</p>
        <p>Av. siempre viva 555</p>
      </div>
      <div className='info-row'>
        <p className='info-attribute'>Date</p>
        <p>01/03/2025, 14:00 hs.</p>
      </div>
      <div className='info-row'>
        <p className='info-attribute'>Duration</p>
        <p>60 minutes</p>
      </div>
      <div className='info-row'>
        <p className='info-attribute'>Amount of passengers</p>
        <p>1</p>
      </div> 
    </div>
  )
}