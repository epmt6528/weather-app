import { useContext } from 'react'
import './styles.less'
import { SelectedCityContext } from '../../../context/SelectedCityContextWrapper'
import { cityList } from '../../../consts/cityList'
import { NavigationButton } from '../../atoms'

const Navigation = (): JSX.Element => {
  const { selectedCityContext } = useContext(SelectedCityContext)
  const [selectedCity, setSelectedCity] = selectedCityContext

  return (
    <div className={'navigation-root'}>
      {
        cityList.map((cityName)=>{
          const {id, name} = cityName
          const isActive = selectedCity === cityName
          const onClick = () => setSelectedCity(cityName)
          const upperCasedCityName = name.toUpperCase()

          return(
            <NavigationButton key={id} active={isActive} onClick={onClick}>
              {upperCasedCityName}
            </NavigationButton>
          )
        })
      }
    </div>
  )
}

export default Navigation