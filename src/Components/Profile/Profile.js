import React from 'react';
import './style.css';
import github from '../../vectors/GitHub_32.png';
import linkedin from '../../vectors/linkedin_32.png';

class Profile extends React.Component {
	render() {
		return (
			<div className='profile'>
				<h3>{this.props.name}</h3>
				<h4>{this.props.devs}</h4>
				<p>{this.props.children}</p>
				<a href={this.props.github} target='blank'>
					<img src={github} alt='github logo' className='logo' />
				</a>
				<a href={this.props.linkedin} target='blank'>
					<img src={linkedin} alt='linkedin logo' className='logo' />
				</a>
			</div>
		);
	}
}

export default Profile;
