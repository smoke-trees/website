import React from 'react'
import './style.css'
import contact from '../../vectors/undraw_terms_lso0.svg'
import ThemeContext from '../../theme'
import 'aos/dist/aos.css'

class Contact extends React.Component {
  componentDidMount () {
    import('aos').then(AosModule => {
      AosModule.init({ once: true })
    })
  }

  render () {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className={theme === 'dark' ? 'contact-page dark' : 'contact-page'}>
            <div className='container'>
              <div className='content-page'>
                <div className='image' data-aos='fade-up' data-aos-duration='1000'>
                  <img src={contact} alt='' />
                </div>
                <div className='text-content' data-aos='fade-left' data-aos-duration='1000'>
                  <div className='contact-content'>
                    <h3 className='office'>
                      {/* <span className='branch' >Branch</span> */}
                    </h3>
                    {/* <hr /> */}
                    <p>For more information or queries please contact us at:</p>
                    <h3>smoketreesofficial@gmail.com</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Contact
