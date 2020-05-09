import React from 'react'
import './style.css'
import contact from '../../vectors/undraw_terms_lso0.svg'
import ThemeContext from '../../theme'
import 'aos/dist/aos.css'

class Contact extends React.Component {
  componentDidMount () {
    import('aos').then(AosModule => {
      AosModule.init()
    })
  }

  render () {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className={theme === 'dark' ? 'contact-page dark' : 'contact-page'}>
            <div className='container'>
              <div className='content-page'>
                <div className='image'>
                  <img src={contact} alt='' />
                </div>
                <div className='text-content'>
                  <div className='contact-content'>
                    <h3 className='office'>Office
                      {/* <span className='branch' >Branch</span> */}
                    </h3>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quasi.</p>
                    <hr />
                    <h3>+91XXXXXXXXXX</h3>
                    <h3>email@gmail.com</h3>
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
