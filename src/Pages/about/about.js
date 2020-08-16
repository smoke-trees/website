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
    window.scrollTo(0, 0)
    import('aos').then(AosModule => {
      AosModule.init({ once: true })
    })
  }

  render () {
    return (
      <ThemeContext.Consumer>
        {({ theme, animationSpeed, handleToggleNavbar }) => (
          <div className={theme === 'dark' ? 'about-page dark' : 'about-page'} onClick={handleToggleNavbar}>
            <div className='container' data-aos='fade-in' data-aos-duration={animationSpeed}>
              <LandingBanner image={team} heading='About Us' animationSpeed={animationSpeed}>
                 SmokeTrees was born from an idea to bring the best developers out there onto a single
                 platform to create the ultimate community of coders, who are dedicated to serving the world.
                  We provide top-class services, in the friendliest manner, maintaining the highest programming standards.
              </LandingBanner>
              <h1 className='what-we-do' data-aos='fade-up' data-aos-duration={animationSpeed}>What we do ?</h1>
              <div className='about-content' data-aos='fade-up' data-aos-duration={animationSpeed}>
                <ColumnContent
                  animationSpeed={animationSpeed}
                  className='column2'
                  heading='App Development'
                >
                  With mobile apps becoming vital to business success, we help you realise your ideas and bring it to the palm of your hand.
                  Our team consists of top mobile app developers who are well known to craft the most innovative & eye catchy pocket sized softwares. Our products are engineered to bring growth to your business.
                </ColumnContent>
                <ColumnContent animationSpeed={animationSpeed} heading='Artificial Intelligence'>
               AI or Artificial Intelligence
               is being used in modern society
               for automating every single task
               that a human can perform, we at SmokeTrees
                believe in staying ahead of the curve and have several
                developers working on making headway into exactly these applications.
                </ColumnContent>

                <ColumnContent
                  animationSpeed={animationSpeed}
                  heading='Web Development'
                >
                  Implementation beats oration. We are a team of dedicated Web Devs and DevOps who believe in these words. We deliver on every front, and don't hesitate to deliver the very best.
We make sure that your new website has the most beautiful front-end and a tried and tested backend, with a code that is ready for deployment.
                </ColumnContent>

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
