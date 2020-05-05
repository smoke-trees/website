import React from 'react'
import "./style.css"
import Footer from "../../Components/Footer/Footer";
import LandingBanner from "../../Components/LandingBanner/LandingBanner";
import team from "../../vectors/undraw_forming_ideas_0pav.svg"


class TeamPage extends React.Component {


    render() {
        return (
            <div className="team-page">
                <div className="container">
                    <LandingBanner image = {team} heading = {'Teams'} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default TeamPage