import { Component } from 'react'
import './styles.less'
import { cityList } from '../../../consts/cityList'
import { NavigationButton } from '../../atoms'

export type selectedCity = {
  id: string,
  name: string
}

type NavigationProps = {
  selectedCity: selectedCity,
  setSelectedCity: (selectedCity: selectedCity) => void
}

class Navigation extends Component<NavigationProps> {
  render() {
    return (
      <div className={'navigation-root'}>
        {
          cityList.map((cityName)=>{
            const {id, name} = cityName
            const isActive = this.props.selectedCity === cityName
            const onClick = () => this.props.setSelectedCity(cityName)
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

}

export default Navigation