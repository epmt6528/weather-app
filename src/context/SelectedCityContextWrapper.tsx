import React, { createContext, useState } from 'react'
import { cityList } from '../consts/cityList'

export const SelectedCityContext = createContext({})

interface CardProps  {
  children: React.ReactNode
}

const SelectedCityContextWrapper = (props: CardProps) => {
  const {children} = props
  const [selectedCity, setSelectedCity] = useState(cityList[0])

  return (
    <SelectedCityContext.Provider value={{
      selectedCityContext: [selectedCity, setSelectedCity]
    }}>
      {children}
    </SelectedCityContext.Provider>
  )
}

export default SelectedCityContextWrapper