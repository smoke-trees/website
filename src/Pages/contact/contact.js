import React from 'react';
import './style.css';
import contact from '../../vectors/undraw_terms_lso0.svg';
import ThemeContext from '../../theme';
import 'aos/dist/aos.css';

class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    import('aos').then((AosModule) => {
      AosModule.init({ once: true });
    });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, animationSpeed, dimensions, handleToggleNavbar }) => (
          <div
            className={theme === 'dark' ? 'contact-page dark' : 'contact-page'}
            onClick={handleToggleNavbar}
          >
            <div className='container'>
              <div className='content-page'>
                <div
                  className='image'
                  data-aos='fade-right'
                  data-aos-duration={animationSpeed}
                >
                  <img src={contact} alt='' />
                </div>
                <div
                  className='text-content contact-content-container'
                  data-aos={dimensions.width > 800 ? 'fade-left' : 'fade-in'}
                  data-aos-duration={animationSpeed}
                >
                  <div className='contact-content'>
                    <h3 className='office'>
                      {/* <span className='branch' >Branch</span> */}
                    </h3>
                    {/* <hr /> */}
                    <p>For more information or queries please contact us at:</p>
                    <a href='mailto:smoketreesofficial@gmail.com'>
                      smoketreesofficial@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Contact;
