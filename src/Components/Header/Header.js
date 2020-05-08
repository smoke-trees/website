import React from 'react'
import './style.css'
import { Route } from 'react-router-dom'

class Header extends React.Component {
  render () {
    return (
      <div>
        <header>
          <a href='/' className='logo'><p>Smoketrees</p></a>
          <input type='checkbox' id='nav-toggle' className='nav-toggle' />
          <nav>
            <ul>
              <li>
                <a href='/about'>About</a>
              </li>
              <li>
                <a href='/projects'>Projects</a>
              </li>
              <li>
                <a href='/team'>Team</a>
              </li>
              <li>
                <a href='/contact'>Contact</a>
              </li>
            </ul>
          </nav>
          <label for='nav-toggle' className='nav-toggle-label'>
            <span />
          </label>
        </header>
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
