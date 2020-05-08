import React from 'react'
import './style.css'
import { Route, Link } from 'react-router-dom'

class Header extends React.Component {
  render () {
    return (
      <div>
        <div className='navbar-container'>
          <div className='navbar'>
            <div className='logo-container'>
              <div className='logo'>
                <Link to='/'>Smoketrees</Link>
              </div>
            </div>
            <div style={{ flex: '1' }} />
            <div className='navigation'>
              <ul className='ul-list'>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/projects'>Projects</Link>
                </li>
                <li>
                  <Link to='/team'>Team</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Route exact path='/' component={this.props.index} />
        <Route path='/about' component={this.props.about} />
        <Route path='/projects' component={this.props.projects} />
        <Route path='/team' component={this.props.team} />
        <Route path='/contact' component={this.props.contact} />
      </div>
    )
  }
}

export default Header
