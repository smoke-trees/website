import React from 'react'
import './style.css'
import { Route, Link } from 'react-router-dom'
import ThemeContext from '../../theme'

class Header extends React.Component {
  constructor (props) {
    super(props)
    const mobileSpeed = '800'
    const desktopSpeed = '1000'

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
    this.state = {
      theme: storeTheme,
      toggleTheme: this.toggleTheme,
      navbar: false,
      dimensions: dimensions,
      animationSpeed: animationSpeed
    }

    this.handleNavClick = (e) => {
      this.setState({ navbar: !this.state.navbar })
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

  // handleOnClick () {
  //   $(document).ready( function () {
  //     $('.uncheck').click(function(){
  //         $('#myCheck').prop('checked', false);
  //     })
  // });
  // }

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
                <Link to='/about' onClick={this.handleOnClick}>About</Link>
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
