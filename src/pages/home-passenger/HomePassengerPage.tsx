import { DivisionComponent } from '../../components/division-component/DivisionComponent'
import { FormPassenger } from '../../components/form-passenger/FormPassenger'
import { GridComponent } from '../../components/grid/GridComponent'
import { TitleComponent } from '../../components/title-component/TitleComponent'
import './HomePassengerPage.css'

export const HomePassengerPage = () => {
  return (
    <div className='main-layout'>
        <div className='home-container-items'>
          <TitleComponent text='Take a Trip' />
          <FormPassenger />
        </div>
        <DivisionComponent />
        <div className='home-container-items'>
          <TitleComponent text = 'Result' />
          <GridComponent />
        </div> 
    </div>
  )
}