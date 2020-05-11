import React, { useEffect, useState } from 'react'
import Carousel from 'nuka-carousel'
import './style.css'
import Footer from '../../Components/Footer/Footer'
import LandingBanner from '../../Components/LandingBanner/LandingBanner'
import Profile from '../../Components/Profile/Profile'
import team from '../../vectors/undraw_forming_ideas_0pav.svg'
import ThemeContext from '../../theme'
import members from './team-content'
import 'aos/dist/aos.css'

const TeamPage = function () {
  const [animated, updateStateAnimated] = useState(false)
  const [slideState, setSlideState] = useState(0)
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    function handleResize (e) {
      if ((dimensions.width <= 800 && e.target.innerWidth > 800) ||
      (dimensions.width > 800 && e.target.innerWidth <= 800)) {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        })
      }
    }
    window.addEventListener('resize', handleResize)
  })
  useEffect((e) => {
    if (!animated) {
      import('aos').then(AosModule => {
        AosModule.init({ once: true })
      })
      updateStateAnimated(true)
    }
  }, [animated])

  const createDevCards = () => {
    const renderedCards = []
    for (let i = 0; i < members.length;) {
      if (window.innerWidth > 800) {
        const member1 = members[i]
        const member2 = members[i + 1]
        const member3 = members[i + 2]
        const member4 = members[i + 3]
        const member5 = members[i + 4]
        const member6 = members[i + 5]
        renderedCards.push(
          <div key={i}>
            <div className='team-content'>
              {member1 ? (
                <Profile
                  className='profile1'
                  name={member1.name}
                  devs={member1.devs}
                  children={member1.description}
                  github={member1.github}
                  linkedin={member1.linkedin}
                  drible={member1.drible}
                />
              ) : (<div />)}
              {member2 ? (
                <Profile
                  className='profile2'
                  name={member2.name}
                  devs={member2.devs}
                  children={member2.description}
                  github={member2.github}
                  linkedin={member2.linkedin}
                  drible={member2.drible}
                />
              ) : (<div />)}
              {member3 ? (
                <Profile
                  className='profile1'
                  name={member3.name}
                  devs={member3.devs}
                  children={member3.description}
                  github={member3.github}
                  linkedin={member3.linkedin}
                  drible={member3.drible}
                />
              ) : (<div />)}
            </div>
            <div className='team-content'>
              {member4 ? (
                <Profile
                  className='profile1'
                  name={member4.name}
                  devs={member4.devs}
                  children={member4.description}
                  github={member4.github}
                  linkedin={member4.linkedin}
                  drible={member4.drible}
                />
              ) : (<div />)}
              {member5 ? (
                <Profile
                  className='profile2'
                  name={member5.name}
                  devs={member5.devs}
                  children={member5.description}
                  github={member5.github}
                  linkedin={member5.linkedin}
                  drible={member5.drible}
                />
              ) : (<div />)}
              {member6 ? (
                <Profile
                  className='profile1'
                  name={member6.name}
                  devs={member6.devs}
                  children={member6.description}
                  github={member6.github}
                  linkedin={member6.linkedin}
                  drible={member6.drible}
                />
              ) : (<div />)}
            </div>
          </div>
        )
        i = i + 6
      } else {
        const member1 = members[i]
        const member2 = members[i + 1]
        renderedCards.push(
          <div key={i}>
            <div className='team-content'>
              {member1 ? (
                <Profile
                  className='profile-single'
                  name={member1.name}
                  devs={member1.devs}
                  children={member1.description}
                  github={member1.github}
                  linkedin={member1.linkedin}
                  drible={member1.drible}
                />
              ) : (<div />)}
              {member2 ? (
                <Profile
                  className='profile-single'
                  name={member2.name}
                  devs={member2.devs}
                  children={member2.description}
                  github={member2.github}
                  linkedin={member2.linkedin}
                  drible={member2.drible}
                />
              ) : (<div />)}
            </div>
          </div>
        )
        i = i + 2
      }
    }
    return renderedCards
  }
  const teamMembers = createDevCards()

  const leftArrow = ({ previousSlide }) => {
    const leftArrowClass = slideState === 0 ? 'carousel-left-arrow gg-chevron-left invalid' : 'carousel-left-arrow gg-chevron-left'
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div
            onClick={previousSlide}
            className={leftArrowClass}
          />
        )}
      </ThemeContext.Consumer>
    )
  }
  const rightArrow = ({ nextSlide, slideCount }) => {
    const rightArrowClass = slideState === slideCount - 1 ? 'carousel-right-arrow gg-chevron-right invalid' : 'carousel-right-arrow gg-chevron-right'
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div
            onClick={nextSlide}
            className={rightArrowClass}
          />
        )}
      </ThemeContext.Consumer>
    )
  }
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <div className={theme === 'dark' ? 'team-page dark' : 'team-page'}>
          <div className='container' data-aos='zoom-out-up' data-aos-duration='1000'>
            <LandingBanner image={team} heading='Team'>
The driving force behind SmokeTrees is the hard work and talent of its
founding members dedicated to bringing the developers' community together.
Each of them is extremely skilled in their own fortes and ensure top notch results.
            </LandingBanner>
            <Carousel
              dragging={false}
              data-aos='fade-up' data-aos-duration='1000'
              enableKeyboardControls
              slideIndex={slideState}
              afterSlide={slideIndex => setSlideState(slideIndex)}
              className='team-carousel'
              style={{ outline: 'none', cursor: 'normal' }}
              renderCenterLeftControls={leftArrow}
              renderCenterRightControls={rightArrow}
              defaultControlsConfig={{
                pagingDotsStyle: {
                  fill: theme === 'dark' ? '#2ab34b' : '#21409a'
                }
              }}
            >
              {teamMembers}
            </Carousel>
          </div>
          <Footer />
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default TeamPage
