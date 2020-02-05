import React, {
  createContext,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { theme, themeDark } from 'src/utils/Styles'

const initialState = {
  dark: false,
  toggleDark: () => { },
}

export const SiteContext = createContext(initialState)

// Todo - enable automatic dark mode.
// const supportsDarkMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches === true


const SiteProvider = ({ children }) => {
  const [dark, setDark] = useState(false)


  const toggleDark = () => {
    setDark(!dark)
  }

  return (
    <SiteContext.Provider value={{
      dark,
      toggleDark,
    }}
    >
      <ThemeProvider theme={dark ? themeDark : theme}>
        {children}
      </ThemeProvider>
    </SiteContext.Provider>
  )
}

SiteProvider.propTypes = {
  children: PropTypes.node.isRequired,
}


export default SiteProvider
