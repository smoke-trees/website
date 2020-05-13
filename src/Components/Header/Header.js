import React from 'react'
import './style.css'
import { Route } from 'react-router-dom'
import ThemeContext from '../../theme'

class Header extends React.Component {
  constructor (props) {
    super(props)
    const mobileSpeed = '800'
    const desktopSpeed = '1000'
    this.navRef = React.createRef()

    let storeTheme = 'light'
    try {
      if (window.localStorage) {
        storeTheme = window.localStorage.getItem('smoke-color') || 'light'
      } else {
        storeTheme = 'light'
      }
    } catch (e) {
    }
    this.toggleTheme = () => {
      this.setState(state => {
        if (window.localStorage) {
          try {
            window.localStorage.setItem('smoke-color', state.theme === 'light' ? 'dark' : 'light')
          } catch (e) {
          }
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
      handleToggleNavbar: this.handleToggleNavbar,
      currentPage: window.location.pathname
    }

    this.handleTopicClick = (topic) => (e) => {
      this.setState({ navbar: false })
      if (this.state.dimensions.width > 800) {
        this.setState({ currentPage: topic })
      }
    }
    this.isCurrentPage = (topic) => {
      if (this.state.dimensions.width > 800 && this.state.currentPage === topic) {
        return 'current-page'
      }
      return ''
    }
  }

  componentDidMount () {
    if (document.querySelector('.dark')) {
      document.body.style.background = '#121212'
    } else {
      document.body.style.background = '#ffffff'
    }
    window.addEventListener('resize', this.handleResize)
    if (this.state.theme === 'dark') {
      document.documentElement.style.setProperty('--scrollbar-color', '#2ab34b')
      document.documentElement.style.setProperty('--scrollbar-background', '#121212')
    } else {
      document.documentElement.style.setProperty('--scrollbar-color', '#20149a')
      document.documentElement.style.setProperty('--scrollbar-background', '#fff')
    }
  }

  componentDidUpdate () {
    if (document.querySelector('.dark')) {
      document.body.style.background = '#121212'
    } else {
      document.body.style.background = '#ffffff'
    }
    window.addEventListener('resize', this.handleResize)
    if (this.state.theme === 'dark') {
      document.documentElement.style.setProperty('--scrollbar-color', '#2ab34b')
      document.documentElement.style.setProperty('--scrollbar-background', '#121212')
    } else {
      document.documentElement.style.setProperty('--scrollbar-color', '#20149a')
      document.documentElement.style.setProperty('--scrollbar-background', '#fff')
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
          <a onClick={this.handleTopicClick('')} href='/' className='logo'><p>SmokeTrees</p></a>
          <nav className={this.state.navbar && this.state.dimensions.width < 800 ? 'mobile-nav' : ''}>
            <ul>
              <li>
                <a
                  id='about' className={this.isCurrentPage('/about')}
                  onClick={this.handleTopicClick('/about')} href='/about'
                >About
                </a>
              </li>
              <li>
                <a
                  id='projects' className={this.isCurrentPage('/projects')}
                  onClick={this.handleTopicClick('/projects')} href='/projects'
                >Projects
                </a>
              </li>
              <li>
                <a
                  id='team' className={this.isCurrentPage('/team')}
                  onClick={this.handleTopicClick('/team')} href='/team'
                >Team
                </a>
              </li>
              <li>
                <a
                  id='contact' className={this.isCurrentPage('/contact')}
                  onClick={this.handleTopicClick('/contact')} href='/contact'
                >Contact
                </a>
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
