import React, { createContext, useState } from 'react'
import { cityList } from '../consts/cityList'

type SelectedCityContextWrapperProps = {
  children: React.ReactNode
}

type selectedCity = {
  id: string,
  name: string
}

export const SelectedCityContext = createContext<any>({})

const SelectedCityContextWrapper = (props: SelectedCityContextWrapperProps): JSX.Element => {
  const {children} = props
  const [selectedCity, setSelectedCity] = useState<selectedCity>(cityList[0])

  return (
    <SelectedCityContext.Provider value={{
      selectedCityContext: [selectedCity, setSelectedCity]
    }}>
      {children}
    </SelectedCityContext.Provider>
  )
}

export default SelectedCityContextWrapper