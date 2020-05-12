import React from 'react';
import './style.css';
import contact from '../../vectors/undraw_terms_lso0.svg';
import ThemeContext from '../../theme';
import 'aos/dist/aos.css';

class Contact extends React.Component {
  componentDidMount() {
    import('aos').then((AosModule) => {
      AosModule.init();
    });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div
            className={theme === 'dark' ? 'contact-page dark' : 'contact-page'}
          >
            <div className='container'>
              <div className='content-page'>
                <div className='image'>
                  <img src={contact} alt='' />
                </div>
                <div className='text-content'>
                  <div className='contact-content'>
                    <hr />
                    <p>For more information or queries please contact us at</p>
                    <hr />
                    <h3>smoketreesofficial@gmail.com</h3>
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
