import { useEffect, useState } from 'react'
import { DivisionComponent } from '../../components/division-component/DivisionComponent'
import { FormPassenger } from '../../components/form-passenger/FormPassenger'
import { GridComponent } from '../../components/grid/GridComponent'
import { TitleComponent } from '../../components/title-component/TitleComponent'
import './HomePassengerPage.css'
import type { Driver } from '../../domain/User'
import DriverServiceManager from '../../services/driver-service/DriverServiceManager'
import type { TripSearchValuesJSON } from '../../domain/Trip'

export const HomePassengerPage = () => {

  //Lo que el usuario escribe en el formulario. 
  const [searchForm, setSearchForm] = useState<TripSearchValuesJSON>({origin: '', destination: '', date: '', amountOfPassengers: 0});

  //Lo que se usa para buscar. Se setea cuando el usuario hace click en buscar (el boton setea el activeSearch)
  const [activeSearch, setActiveSearch] = useState<TripSearchValuesJSON | null>(null);

  const [drivers, setDrivers] = useState<Driver[]>([])

  const searchDrivers = async () => {
    const result = await DriverServiceManager
      .getInstance()
      .getAvailableDrivers()

    setDrivers(result)
  }
  //Cada vez que activeSearch cambia, se hace la busqueda y el serviceManager consulta al back o a los stubs. 
  useEffect(() => {
    if (!activeSearch) return
    searchDrivers()
  }, [activeSearch])

  return (
    <div className='main-layout'>
        <div className='home-container-items'>
          <TitleComponent text='Take a Trip' />
          <FormPassenger
            values = { searchForm }
            onChange = { setSearchForm }
            onSearch = { () => setActiveSearch(searchForm) }
          />
        </div>
        <DivisionComponent />
        <div className='home-container-items'>
          <TitleComponent text = 'Result' />
          <GridComponent drivers={drivers} />
        </div> 
    </div>
  )
}