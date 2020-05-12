import React from 'react'
import './style.css'
import { Route, Link } from 'react-router-dom'
import ThemeContext from '../../theme'

class Header extends React.Component {
  constructor (props) {
    super(props)
    const mobileSpeed = '800'
    const desktopSpeed = '1000'
    this.navRef = React.createRef()

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
    const dimensions = { height: window.innerHeight, width: window.innerWidth }
    const animationSpeed = dimensions.width > 800 ? desktopSpeed : mobileSpeed
    this.handleToggleNavbar = (e) => {
      if (this.state.navbar) {
        this.setState({ navbar: !this.state.navbar })
      }
    }
    this.handleNavbarToggleClick = (e) => {
      this.setState({ navbar: !this.state.navbar })
    }

    this.handleBlur = (e) => {
      // console.log(e)
      this.setState({ navbar: false })
    }

    this.handleResize = (e) => {
      if (this.state.dimensions.width <= 800 && e.target.innerWidth > 800) {
        this.setState({ dimensions: { height: e.target.innerHeight, width: e.target.innerWidth } })
        this.setState({ animationSpeed: desktopSpeed })
      } else if (this.state.dimensions.width > 800 && e.target.innerWidth <= 800) {
        this.setState({ dimensions: { height: e.target.innerHeight, width: e.target.innerWidth } })
        this.setState({ animationSpeed: mobileSpeed })
      }
    }
    this.state = {
      theme: storeTheme,
      toggleTheme: this.toggleTheme,
      navbar: false,
      dimensions: dimensions,
      animationSpeed: animationSpeed,
      handleToggleNavbar: this.handleToggleNavbar
    }
  }

  componentDidMount () {
    if (document.querySelector('.dark')) {
      document.body.style.background = '#121212'
    } else {
      document.body.style.background = '#ffffff'
    }
    window.addEventListener('resize', this.handleResize)
  }

  componentDidUpdate () {
    if (document.querySelector('.dark')) {
      document.body.style.background = '#121212'
    } else {
      document.body.style.background = '#ffffff'
    }
    window.addEventListener('resize', this.handleResize)
  }

  render () {
    let navbarClassName = 'navbar-container'
    if (this.state.theme === 'dark') {
      navbarClassName = 'navbar-container dark'
    }
    return (
      <div>
        <header className={navbarClassName}>
          <Link onClick={this.handleToggleNavbar} to='/' className='logo'><p>SmokeTrees</p></Link>
          <nav className={this.state.navbar && this.state.dimensions.width < 800 ? 'mobile-nav' : ''}>
            <ul>
              <li>
                <Link onClick={this.handleNavbarToggleClick} to='/about'>About</Link>
              </li>
              <li>
                <Link onClick={this.handleNavbarToggleClick} to='/projects'>Projects</Link>
              </li>
              <li>
                <Link onClick={this.handleNavbarToggleClick} to='/team'>Team</Link>
              </li>
              <li>
                <Link onClick={this.handleNavbarToggleClick} to='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
          <div
            ref={this.navRef}
            role='grid'
            // onBlur={(e) => { console.log(e) }}
            onClick={this.handleNavbarToggleClick}
            className='nav-toggle-label'
          >
            <span />
          </div>
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
