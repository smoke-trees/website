import React, { useEffect, useState } from 'react'
import Carousel from 'nuka-carousel'
import './style.css'
import Footer from '../../Components/Footer/Footer'
import LandingBanner from '../../Components/LandingBanner/LandingBanner'
import Profile from '../../Components/Profile/Profile'
import team from '../../vectors/undraw_forming_ideas_0pav.svg'
import ThemeContext from '../../theme'
import members from './team-content'

function leftArrow ({ previousSlide }) {
  return (
    <div onClick={previousSlide} className='corousel-left-arrow'>
        Previous
    </div>
  )
}
function rightArrow ({ nextSlide }) {
  return (
    <div onClick={nextSlide} className='corousel-right-arrow'>
        Next
    </div>
  )
}
const TeamPage = () => {
  const createDevCards = () => {
    const renderedCards = []
    for (let i = 0; i < members.length;) {
      if (window.innerWidth >= 768) {
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

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect((e) => {
    function handleResize (e) {
      if ((dimensions.width < 768 && e.target.innerWidth >= 768) ||
      (dimensions.width >= 768 && e.target.innerWidth < 768)) {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        })
      }
    }
    window.addEventListener('resize', handleResize)
  })
  const teamMembers = createDevCards()
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <div className={theme === 'dark' ? 'team-page dark' : 'team-page'}>
          <div className='container'>
            <LandingBanner image={team} heading='Teams'>
              {' '}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
      cumque soluta commodi enim culpa cupiditate nemo sequi laboriosam,
      consequuntur quae nisi porro. Mollitia, eius blanditiis delectus
      possimus perspiciatis sit reiciendis!{' '}
            </LandingBanner>
            <Carousel
              renderCenterLeftControls={leftArrow}
              renderCenterRightControls={rightArrow}
              defaultControlsConfig={{
                pagingDotsStyle: {
                  fill: '#21409A'
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
