import React, { useEffect, useState } from 'react'
import './style.css'
import logo from '../../vectors/logo.svg'
import github from '../../vectors/github.svg'
import versionControl from '../../vectors/version-control.svg'
import designFeedback from '../../vectors/design_feedback.svg'
import realTime from '../../vectors/real-time.svg'
import ThemeContext from '../../theme'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

const IndexPage = () => {
  const [dimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  const [didMount, setDidMount] = useState(false)
  useEffect(() => {
    if (!didMount) {
      window.scrollTo(0, 0)
      setDidMount(true)
    }
    if (window.innerWidth >= 799) {
      import('typed.js').then((TypedModule) => {
        const Typed = TypedModule.default
        const typed = new Typed('#typed', {
          stringsElement: '#head-description',
          typeSpeed: 40
        })
        return typed
      })
    }
    import('aos').then((AosModule) => {
      AosModule.init({ once: true })
    })
    function handleResize (e) {
      if ((dimensions.width <= 800 && e.target.innerWidth > 800) ||
      (dimensions.width > 800 && e.target.innerWidth <= 800)) {
        window.location.reload()
      }
    }
    window.addEventListener('resize', handleResize)
  }, [dimensions, didMount])

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme, animationSpeed, dimensions, handleToggleNavbar }) => (
        <div onClick={handleToggleNavbar} className={theme === 'light' ? 'index-page' : 'index-page dark'}>
          <div className='container'>
            <div className='landing'>
              <div className='smoketrees' data-aos='fade-in' data-aos-duration={animationSpeed}>
                <img alt='SmokeTrees' title={theme === 'dark' ? 'LightTheme' : 'DarkTheme'} src={logo} style={{ cursor: 'pointer' }} onClick={toggleTheme} />
              </div>
              <div
                className='head '
                data-aos={window.innerWidth < 800 ? 'fade-in' : ''}
                data-aos-duration={window.innerWidth < 800 ? { animationSpeed } : ''}
                id='head-description'
              >
                <p><span>We are a <span className='digital'>digital agency</span> <br />based on <span className='technology'>technology</span></span></p>
                {/* <div className='btn'>
                                Explore
                            </div> */}
              </div>
              <span id='typed' />
            </div>
            <div className='tag' data-aos='fade-up' data-aos-duration={animationSpeed}>We <span className='build'>build</span> what you <span className='build'>ideate</span>.</div>
            <div className='container-basic'>
              <div
                className='description' data-aos={dimensions.width > 800 ? 'fade-right' : 'fade-up'}
                data-aos-duration={animationSpeed}
              >
                <h1>GitHub</h1>
                <p>Check out our project implementations here, that we believe are robust, and should be scrutinized by everyone so that they can see for themselves our raw work.
                  <br />
                  PS: This website you're viewing? You can check out it's code on our github too!
                </p>
                <a href='https://github.com/smoke-trees' target='_blank' rel='noopener noreferrer'>
                  <div className='btn'>
                    <div className='elements'>
                      <img className='index-github-logo' src={github} alt='' />
                      <div className='git'>
                                        GitHub
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className='logo-svg'
                data-aos={dimensions.width > 800 ? 'fade-right' : 'fade-up'} data-aos-duration={animationSpeed}
              >
                <img alt='' src={versionControl} />
              </div>
            </div>
            <div className='container-basic'>
              <div
                className='logo-svg'
                data-aos={dimensions.width > 800 ? 'fade-left' : 'fade-up'} data-aos-duration={animationSpeed}
              >
                <img alt='' src={designFeedback} />
              </div>
              <div
                className='description alter'
                data-aos={dimensions.width > 800 ? 'fade-left' : 'fade-up'} data-aos-duration={animationSpeed}
              >
                <div className='alter-extra-div'>
                  <h1>Our Projects</h1>
                  <p>CESS: Comprehensive Electoral Solutions Suite - an elections suite software which merges RFID and fingerprint recognition with extra layers of security which checks emotion when you vote while securing your transaction via a smart ethereum contract.</p>
                </div>
                <Link to='/projects'>
                  <div className='btn'>
                    <div className='elements'>
                      <div className='git'>
                                         More Projects
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='container-basic client'>
              <div
                className='description'
                data-aos={dimensions.width > 800 ? 'fade-right' : 'fade-up'} data-aos-duration={animationSpeed}
              >
                <h1>Clients</h1>
                <p>KiVi Infotech is really pleased with the work delivered by SmokeTrees.
Regular updates on GitHub for code development using Flutter platform made my work lot easier.
                </p>
                <p
                  style={{
                    fontSize: '1.1em',
                    fontWeight: 'bold',
                    textAlign: 'right',
                    boxSizing: 'border-box'
                  }}
                >
                  <a
                    className='client-name'
                    href='https://www.linkedin.com/in/vishal-dhagat-5009751b'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                  -Vishal Dhagat, KiVi Infotech
                  </a>
                </p>
              </div>
              <div className='logo-svg' data-aos={dimensions.width > 800 ? 'fade-right' : 'fade-up'} data-aos-duration={animationSpeed}>
                <img alt='' src={realTime} />
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default IndexPage
