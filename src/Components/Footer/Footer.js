import React from 'react'
import './style.css'
import ThemeContext from '../../theme'

class Footer extends React.Component {
  render () {
    return (
      <ThemeContext.Consumer>
        {({ toggleTheme }) => (
          <div className='footer'>
            <div className='first-card-container'>
              <div className='half-white' />
              <div className='half-gray' />
              <div className='first-card-wrapper'>
                <div className='first-card'>
                  <h1>Devs like dark theme.</h1>
                  <div className='circle-button-wrapper'>
                    <div onClick={toggleTheme} className='circle-button' />
                  </div>
                </div>
              </div>
            </div>
            <div className='second-card'>
              <p>Lorem ipsumidolor sit amet consectetur adipisicing elit. Molestias, laborum est. Nesciunt eligendi dignissimos veritatis at asperiores magnam ipsa! Quos impedit consequatur temporibus recusandae consequuntur iure illo expedita architecto voluptatum.</p>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Footer
