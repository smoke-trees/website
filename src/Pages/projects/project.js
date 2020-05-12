import React from 'react';
import './style.css';
import Footer from '../../Components/Footer/Footer';
import LandingBanner from '../../Components/LandingBanner/LandingBanner';
import ColumnContent from '../../Components/ColumnContent/ColumnContent';
import board from '../../vectors/undraw_scrum_board_cesn.svg';
import ThemeContext from '../../theme';

class ProjectPage extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div
            className={theme === 'dark' ? 'project-page dark' : 'project-page'}
          >
            <div className='container'>
              <LandingBanner image={board} heading='Projects'>
                The Team behind SmokeTrees is focused on the motto of delivering
                what you ideate. We have a team of skilled young minds who are
                dedicated to serving and building the developers' community. Our
                projects have been carried out with utmost sincerity and
                diligence and will continue so. SmokeTrees is friendly,
                flexible, versatile and packed with talent. If you have an idea
                you want to bring to life, you have come to the right place. You
                can find some of our projects mentioned below.
              </LandingBanner>
              <div className='project-content'>
                <ColumnContent heading='Atlas'>
                  Total Surveillance for Infiltrators, a defense security
                  solutions suite, sort documents on the fly for malcontent,
                  configure drones for maximum area coverage, send
                  communications via commo hubs, protected by swarm and
                  blockchain. TLDR : Automated Solutions for Counter Insurgency.
                </ColumnContent>
                <ColumnContent className='column2' heading='Path Prediction'>
                  A novel way to predict the optimal paths between two points
                  and forsee future GPS data by studying old data using AI.
                </ColumnContent>
                <ColumnContent heading='Uproar'>
                  An application for accumulating all disaster updates in one
                  forum, parsing them and manipulating the data so that only
                  accurate information reaches the people. Features include SOS,
                  mapping, video surveillance and many more.
                </ColumnContent>
              </div>
              <div className='project-content'>
                <ColumnContent heading='Spark'>
                  A Smart Grid solution which compiles home networks and grids
                  in an efficient manner, controlled by recurrent networks which
                  predict distribution and consumption and also supported by an
                  energy credit system. All running as microservices supporting
                  each other.
                </ColumnContent>
                <ColumnContent className='column3' heading='Voice Synthesis'>
                  An implementation of Transfer Learning from Speaker
                  Verification to Multispeaker Text-To-Speech Synthesis (SV2TTS)
                  with a vocoder that works in real-time. SV2TTS is a
                  three-stage deep learning framework that allows to create a
                  numerical representation of a voice from a few seconds of
                  audio, and to use it to condition text-to speech synthesis.
                </ColumnContent>
                <ColumnContent className='column3' heading='Gesture Drive'>
                  An autonomous vehicle solution for people who are physically
                  challenged, calibrates limb angle to drive steering wheel and
                  operate pedals.
                </ColumnContent>
              </div>
            </div>
            <div className='spacer-sm'></div>
            <Footer />
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ProjectPage;
