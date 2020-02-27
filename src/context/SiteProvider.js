import React, {
  createContext,
  useState,
  useEffect,
} from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { theme, themeDark } from 'src/utils/Styles'
import { loadState, saveState } from 'src/utils/helpers'

const initialState = {
  dark: false,
  toggleDark: () => { },
}

export const SiteContext = createContext(initialState)

// Todo - enable automatic dark mode.
const supportsDarkMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches === true


const SiteProvider = ({ children }) => {
  const initState = loadState() || false
  const [dark, setDark] = useState(initState)


  const toggleDark = () => {
    setDark(!dark)
  }

  useEffect(() => {
    if (supportsDarkMode()) {
      setDark(true)
    } else {
      setDark(false)
    }
  }, [])

  useEffect(() => {
    saveState(dark)
  }, [dark])

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
