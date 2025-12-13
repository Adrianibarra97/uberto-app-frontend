import './InfoTrip.css'

interface PropInfoTrip {
  map: Map<string,string>
}

export const InfoTrip = (propInfoTrip: PropInfoTrip) => {
  
  return (
    <div className='info-container'>
    {
     Array.from(propInfoTrip.map.entries()).map((value) =>
      <div className='info-row'>
        <p className='info-attribute'>{value[0]}</p>
        <p>{value[1]}</p>
      </div>
     )
    }
    </div> 
  )
}