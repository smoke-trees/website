import React from 'react';
import './style.css';
import logo from '../../vectors/logo.svg';
import github from '../../vectors/github.svg';
import versionControl from '../../vectors/version-control.svg';
import designFeedback from '../../vectors/design_feedback.svg';
import realTime from '../../vectors/real-time.svg';
import ThemeContext from '../../theme';
import 'aos/dist/aos.css';

class IndexPage extends React.Component {
  componentDidMount() {
    import('typed.js').then((TypedModule) => {
      const Typed = TypedModule.default;
      const typed = new Typed('#typed', {
        stringsElement: '#head-description',
        typeSpeed: 30,
      });
      return typed;
    });
    import('aos').then((AosModule) => {
      AosModule.init();
    });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <div className={theme === 'light' ? 'index-page' : 'index-page dark'}>
            <div className='container'>
              <div className='landing'>
                <div className='smoketrees'>
                  <img
                    alt=''
                    src={logo}
                    style={{ cursor: 'pointer' }}
                    onClick={toggleTheme}
                  />
                </div>
                <div className='head ' id='head-description'>
                  <p>
                    We are a <span className='digital'>digital agency</span>{' '}
                    <br />
                    based on <span className='technology'>technology</span>
                  </p>
                  {/* <div className='btn'>
                                Explore
                            </div> */}
                </div>
                <span id='typed' />
              </div>
              <div className='tag' data-aos='fade-up'>
                We <span className='reinventing'>build</span> what you{' '}
                <span className='reinventing'>ideate</span>
              </div>
              <div className='container-basic' data-aos='fade-up'>
                <div className='description'>
                  <h1>GitHub</h1>
                  <p>
                    Check out our project implementations here, we believe that
                    our projects are robust and should be scrutinized by
                    everyone so that they can see for themselves our raw work.
                    PS: This website you're viewing? You can check out it's code
                    on our github too!
                  </p>
                  <a
                    href='https://github.com/smoke-trees'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn'
                  >
                    <div className='elements'>
                      <img className='index-github-logo' src={github} alt='' />
                      <div className='git'>GitHub</div>
                    </div>
                  </a>
                </div>
                <div className='logo-svg'>
                  <img alt='' src={versionControl} />
                </div>
              </div>
              <div className='container-basic' data-aos='fade-up'>
                <div className='logo-svg'>
                  <img alt='' src={designFeedback} />
                </div>
                <div className='description alter'>
                  <div>
                    <h1>Our Projects</h1>
                    <p>
                      CESS: Comprehensive Electoral Solutions Suite - an
                      elections suite software which merges RFID and fingerprint
                      recognition with extra layers of security which checks
                      emotion when you vote while securing your transaction via
                      a smart ethereum contract.
                    </p>
                  </div>
                  <a href='/projects' className='btn'>
                    <div className='elements'>
                      <div className='more'>Know More</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='container-basic' data-aos='fade-up'>
                <div className='description'>
                  <h1>Clients</h1>
                  <p>
                    KiVi Infotech is really pleased with the work delivered by
                    SmokeTrees. Regular updates on GitHub for code development
                    using Flutter platform made my work lot easier.
                  </p>
                  <a
                    href='https://www.linkedin.com/in/vishal-dhagat-5009751b'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='client'
                  >
                    Vishal Dhagat, KiVi Infotech
                  </a>
                </div>
                <div className='logo-svg'>
                  <img alt='' src={realTime} />
                </div>
              </div>
              <div className='spacer'></div>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default IndexPage;
