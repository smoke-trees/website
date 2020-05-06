import React from 'react';
import './style.css';

class ColumnContent extends React.Component {
	render() {
		return (
			<div className='column'>
				<h3>{this.props.number}</h3>
				<h3>{this.props.heading}</h3>
				<p>{this.props.children}</p>
			</div>
		);
	}
}

export default ColumnContent;
