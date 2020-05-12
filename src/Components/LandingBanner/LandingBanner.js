import React from 'react'
import './style.css'

class LandingBanner extends React.Component {
  render () {
    return (
      <div data-aos='fade-in' data-aos-duration={this.props.animationSpeed} className='landing-banner'>
        <div className='text-content'>
          <div className='content'>
            <h1>{this.props.heading}</h1>
            <p>
              {this.props.children}
            </p>
          </div>
        </div>
        <div className='image'>
          <img src={this.props.image} alt='' />
        </div>
      </div>
    )
  }
}

export default LandingBanner
