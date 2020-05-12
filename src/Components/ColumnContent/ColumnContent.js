import React from 'react'
import './style.css'

class ColumnContent extends React.Component {
  render () {
    // console.log(this.props.link)
    return (
      <div data-aos='fade-up' data-aos-duration={this.props.animationSpeed} className={`column ${this.props.className || ''}`}>
        {this.props.link !== undefined ? (
          <a href={this.props.link} target='_blank' rel='noopener noreferrer'> <h3>{this.props.heading}</h3></a>
        ) : (
          <h3>{this.props.heading}</h3>
        )}
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default ColumnContent
