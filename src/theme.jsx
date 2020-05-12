import React from 'react'

const ThemeContext = React.createContext({
  theme: 'light',
  animationSpeed: '1500',
  toggleTheme: () => {
  }
})

export default ThemeContext
