import React from "react";
import "./style.css"

class LandingBanner extends React.Component {
    render() {
        return(
            <div className="landing-banner">
                <div className="text-content">
                    <div className="content">
                    <h1>{this.props.heading}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod debitis vitae blanditiis et numquam saepe quidem, libero deleniti consectetur consequuntur error harum, temporibus, quaerat fugit? Saepe, rem recusandae. Provident.</p>
                    </div>
                </div>
                <div className="image">
                    <img src={this.props.image} alt=""/>
                </div>
            </div>
        )
    }
}

export default LandingBanner;