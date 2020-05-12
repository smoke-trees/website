import React from 'react';
import './style.css';
import { ReactComponent as Github } from '../../vectors/git-icon.svg';
import { ReactComponent as Linkedin } from '../../vectors/linkedin.svg';

class Profile extends React.Component {
  render() {
    return (
      <div className={`profile ${this.props.className}`}>
        <h3>{this.props.name}</h3>
        <h4>{this.props.devs}</h4>
        <p>{this.props.children}</p>
        <div className='socials'>
          <a href={this.props.github} target='_blank' rel='noopener noreferrer'>
            <Github></Github>
          </a>
          <a
            href={this.props.linkedin}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Linkedin></Linkedin>
          </a>
        </div>
        <div className='spacer-sm'></div>
      </div>
    );
  }
}

export default Profile;
