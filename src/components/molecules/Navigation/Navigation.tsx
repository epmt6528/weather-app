import { useContext } from 'react'
import { SelectedCityContext } from '../../../context/SelectedCityContextWrapper'
import { cityList } from '../../../consts/cityList'
import NavigationButton from '../../atoms/NavigationButton/NavigationButton'

const Navigation = () => {
  // @ts-ignore
  const { selectedCityContext } = useContext(SelectedCityContext)
  const [selectedCity, setSelectedCity] = selectedCityContext

  return (
    <div>
      {
        cityList.map((cityName)=>(
          <NavigationButton key={cityName} active={selectedCity === cityName} onClick={() => setSelectedCity(cityName)}>
            {cityName.toUpperCase()}
          </NavigationButton>
        ))
      }
    </div>
  )
}

export default Navigation