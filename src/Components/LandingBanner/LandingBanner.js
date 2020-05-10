import React from 'react'
import './style.css'

class LandingBanner extends React.Component {
  render () {
    return (
      <div data-aos='zoom-out-up' data-aos-duration='1000' className='landing-banner'>
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
