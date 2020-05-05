import React from 'react'
import "./style.css"
import Footer from "../../Components/Footer/Footer";
import LandingBanner from "../../Components/LandingBanner/LandingBanner";
import board from "../../vectors/undraw_scrum_board_cesn.svg"


class ProjectPage extends React.Component {


    render() {
        return (
            <div className="project-page">
                <div className="container">
                    <LandingBanner image = {board} heading = {'Projects'} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default ProjectPage