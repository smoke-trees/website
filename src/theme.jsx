import React from 'react'

const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {
  }
})

export default ThemeContext
