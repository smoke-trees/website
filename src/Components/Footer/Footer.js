import React from 'react'
import './style.css'
import ThemeContext from '../../theme'

class Footer extends React.Component {
  render () {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <div className='footer'>
            <div className='first-card-container'>
              <div className='half-white' />
              <div className='half-gray' />
              <div className='first-card-wrapper'>
                <div className='first-card'>
                  <h1>Devs like dark theme.</h1>
                  <div className='circle-button-wrapper' title={theme === 'dark' ? 'LightTheme' : 'DarkTheme'}>
                    <div onClick={toggleTheme} className='circle-button' />
                  </div>
                </div>
              </div>
            </div>
            <div className='second-card'>
              <p>Made with <span role='img' aria-label='heart'>❤️</span> by SmokeTrees Devs</p>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Footer
