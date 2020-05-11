import React from 'react'
import './style.css'
import github from '../../vectors/GitHub_32.png'
import githubDark from '../../vectors/g26.png'
import drible from '../../vectors/drible-dark.svg'
import dribleLight from '../../vectors/drible-light.svg'
import linkedin from '../../vectors/linkedin_32.png'
import ThemeContext from '../../theme'

class Profile extends React.Component {
  render () {
    return (
      <div className={`profile ${this.props.className}`}>
        <h3>{this.props.name}</h3>
        <h4>{this.props.devs}</h4>
        <p>{this.props.children}</p>
        {this.props.github ? (
          <a href={this.props.github} target='blank'>
            <ThemeContext.Consumer>
              {({ theme }) => (
                <img src={theme === 'dark' ? githubDark : github} alt='github logo' className='github-logo' />
              )}
            </ThemeContext.Consumer>
          </a>
        ) : (<div style={{ display: 'inline' }} />)}
        {this.props.drible ? (
          <a href={this.props.drible} target='blank'>
            <ThemeContext.Consumer>
              {({ theme }) => (
                <img src={theme === 'dark' ? dribleLight : drible} alt='drible logo' className='drible-logo' />
              )}
            </ThemeContext.Consumer>
          </a>
        ) : (<div style={{ display: 'inline' }} />)}
        {this.props.linkedin ? (

          <a href={this.props.linkedin} target='blank'>
            <img src={linkedin} alt='linkedin logo' className='linkedin-logo' />
          </a>
        ) : (<div />)}
      </div>
    )
  }
}

export default Profile
