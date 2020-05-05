import React from "react";
import "./style.css"
import Footer from "../../Components/Footer/Footer";
import LandingBanner from "../../Components/LandingBanner/LandingBanner";
import team from "../../vectors/undraw_team_spirit_hrr4.svg"

class About extends React.Component{
    render() {
        return(
            <div className="about-page">
                <div className="container">
                    <LandingBanner image = {team} heading = {'About'} />
                    <h1>What we do ?</h1>
                    <div className="about-content">
                        <div className="coloumn">
                            <h3>01</h3>
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tenetur voluptates tempore, iusto quam aperiam, minus ducimus rem sed laudantium distinctio quibusdam, fugiat quia? Laudantium, vero. Sint, non ipsum! Nemo!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tenetur voluptates tempore, iusto quam aperiam, minus ducimus rem sed laudantium distinctio quibusdam, fugiat quia? Laudantium, vero. Sint, non ipsum! Nemo!</p>
                        </div>
                        <div className="coloumn coloumn-two">
                            <h3>01</h3>
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tenetur voluptates tempore, iusto quam aperiam, minus ducimus rem sed laudantium distinctio quibusdam, fugiat quia? Laudantium, vero. Sint, non ipsum! Nemo!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tenetur voluptates tempore, iusto quam aperiam, minus ducimus rem sed laudantium distinctio quibusdam, fugiat quia? Laudantium, vero. Sint, non ipsum! Nemo!</p>
                        </div>
                        <div className="coloumn">
                            <h3>01</h3>
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tenetur voluptates tempore, iusto quam aperiam, minus ducimus rem sed laudantium distinctio quibusdam, fugiat quia? Laudantium, vero. Sint, non ipsum! Nemo!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tenetur voluptates tempore, iusto quam aperiam, minus ducimus rem sed laudantium distinctio quibusdam, fugiat quia? Laudantium, vero. Sint, non ipsum! Nemo!</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;