import React from 'react'
import './style.css'
import Footer from '../../Components/Footer/Footer'
import LandingBanner from '../../Components/LandingBanner/LandingBanner'
import ColumnContent from '../../Components/ColumnContent/ColumnContent'
import team from '../../vectors/undraw_team_spirit_hrr4.svg'
import ThemeContext from '../../theme'
import 'aos/dist/aos.css'

class About extends React.Component {
  componentDidMount () {
    import('aos').then(AosModule => {
      AosModule.init({ once: true })
    })
  }

  render () {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className={theme === 'dark' ? 'about-page dark' : 'about-page'}>
            <div className='container' data-aos='zoom-out-up' data-aos-duration='1000'>
              <LandingBanner image={team} heading='About Us'>
                 SmokeTrees was born from an idea to bring the best developers out there onto a single
                 platform to create the ultimate community of coders, who are dedicated to serving the world.
                  We provide top-class services, in the friendliest manner, keen on delivering what you ideate.
              </LandingBanner>
              <h1 className='what-we-do' data-aos='fade-down' data-aos-duration='1000'>What we do ?</h1>
              <div className='about-content' data-aos='zoom-out-up' data-aos-duration='1000'>
                <ColumnContent heading='Artificial Intelligence'>
               AI or Artificial Intelligence
               is being used in modern society
               for automating every single task
               that a human can perform, we at SmokeTrees
                believe in staying ahead of the curve and have several
                developers working on making headway into exactly these applications.
                </ColumnContent>
                <ColumnContent
                  className='column2'
                  heading='App Devlopment'
                />
                <ColumnContent heading='Web Development' />
              </div>
            </div>
            <Footer />
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default About
