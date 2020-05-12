import React from 'react';
import './style.css';
import github from '../../vectors/GitHub_32.png';
import githubDark from '../../vectors/g26.png';
import drible from '../../vectors/drible-dark.svg';
import dribleLight from '../../vectors/drible-light.svg';
import linkedinWhite from '../../vectors/linkedin-white.svg';
import linkedinBlack from '../../vectors/linkedin-black.svg';
import ThemeContext from '../../theme';

class Profile extends React.Component {
  render() {
    return (
      <div className={`profile ${this.props.className}`}>
        <h3>{this.props.name}</h3>
        <h4>{this.props.devs}</h4>
        <p>{this.props.children}</p>
        <div className='socials'>
          {this.props.github ? (
            <a
              href={this.props.github}
              target='_blank'
              rel='noopener noreferrer'
            >
              <ThemeContext.Consumer>
                {({ theme }) => (
                  <img
                    src={theme === 'dark' ? githubDark : github}
                    alt='github logo'
                    className='github-logo'
                  />
                )}
              </ThemeContext.Consumer>
            </a>
          ) : (
            <div style={{ display: 'inline' }} />
          )}
          {this.props.drible ? (
            <a
              href={this.props.drible}
              target='_blank'
              rel='noopener noreferrer'
            >
              <ThemeContext.Consumer>
                {({ theme }) => (
                  <img
                    src={theme === 'dark' ? dribleLight : drible}
                    alt='drible logo'
                    className='drible-logo'
                  />
                )}
              </ThemeContext.Consumer>
            </a>
          ) : (
            <div style={{ display: 'inline' }} />
          )}
          {this.props.linkedin ? (
            <a
              href={this.props.linkedin}
              target='_blank'
              rel='noopener noreferrer'
            >
              <ThemeContext.Consumer>
                {({ theme }) => (
                  <img
                    src={theme === 'dark' ? linkedinWhite : linkedinBlack}
                    alt='linkedin logo'
                    className='linkedin-logo'
                  />
                )}
              </ThemeContext.Consumer>
            </a>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}

export default Profile;
