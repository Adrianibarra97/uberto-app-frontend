import { FormPassenger } from '../../components/form-passenger/FormPassenger'
import { GridComponent } from '../../components/grid/GridComponent'
import './Home.css'

export const Home = () => {
  return (
    <>
      <div className='home-container'>
        <div className='home-container-items'>
          <h1 className="title-component">Take a trip</h1>
          <FormPassenger />
        </div>
        
        <div className='home-container-items'>
          <h2 className='title-component'>Results</h2>
          <GridComponent />
        </div> 
        
      </div>
    </>
  )
}