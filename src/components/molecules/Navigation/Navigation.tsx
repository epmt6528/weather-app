import { useContext } from 'react'
import { SelectedCityContext } from '../../../context/SelectedCityContextWrapper'
import { cityList } from '../../../consts/cityList'
import NavigationButton from '../../atoms/NavigationButton/NavigationButton'
import './styles.less'

const Navigation = () => {
  // @ts-ignore
  const { selectedCityContext } = useContext(SelectedCityContext)
  const [selectedCity, setSelectedCity] = selectedCityContext

  return (
    <div className={'navigation-root'}>
      {
        cityList.map((cityName)=>(
          <NavigationButton key={cityName.id} active={selectedCity === cityName} onClick={() => setSelectedCity(cityName)}>
            {cityName.name.toUpperCase()}
          </NavigationButton>
        ))
      }
    </div>
  )
}

export default Navigation