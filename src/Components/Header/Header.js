import React from 'react'
import './style.css'
import { Route, Link } from 'react-router-dom'
import ThemeContext from '../../theme'

class Header extends React.Component {
  constructor (props) {
    super(props)

    let storeTheme = 'light'
    if (window.localStorage) {
      storeTheme = window.localStorage.getItem('smoke-color') || 'light'
    } else {
      storeTheme = 'light'
    }

    this.toggleTheme = () => {
      this.setState(state => {
        if (window.localStorage) {
          window.localStorage.setItem('smoke-color', state.theme === 'light' ? 'dark' : 'light')
        }
        return {
          theme: state.theme === 'dark' ? 'light' : 'dark'
        }
      })
    }
    this.state = { theme: storeTheme, toggleTheme: this.toggleTheme, navbar: false }

    this.handleNavClick = (e) => {
      this.setState({ navbar: !this.state.navbar })
    }
  }

  componentDidMount () {
    if (document.querySelector('.dark')) {
      document.body.style.background = '#121212'
    } else {
      document.body.style.background = '#ffffff'
    }
    const toggle = document.querySelector('#nav-toggle')
    console.log(toggle)
  }

  componentDidUpdate () {
    if (document.querySelector('.dark')) {
      document.body.style.background = '#121212'
    } else {
      document.body.style.background = '#ffffff'
    }
  }

  render () {
    let navbarClassName = 'navbar-container'
    if (this.state.theme === 'dark') {
      navbarClassName = 'navbar-container dark'
    }
    return (
      <div>
        <header className={navbarClassName}>
          <Link to='/' className='logo'><p>SmokeTrees</p></Link>
          <input
            type='checkbox' id='nav-toggle'
            onBlur={this.handleBlur} onChange={this.handleNavClick} checked={this.state.navbar}
            className='nav-toggle'
          />
          <nav>
            <ul>
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
          </nav>
          <label htmlFor='nav-toggle' className='nav-toggle-label'>
            <span />
          </label>
        </header>
        <ThemeContext.Provider value={this.state}>
          <Route exact path='/' component={this.props.index} />
          <Route path='/about' component={this.props.about} />
          <Route path='/projects' component={this.props.projects} />
          <Route path='/team' component={this.props.team} />
          <Route path='/contact' component={this.props.contact} />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default Header
