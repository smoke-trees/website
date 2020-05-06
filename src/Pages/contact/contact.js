import React from 'react';
import './style.css';
import contact from '../../vectors/undraw_terms_lso0.svg';
import Footer from '../../Components/Footer/Footer';

class Contact extends React.Component {
	render() {
		return (
			<div className='contact-page'>
				<div className='container'>
					<div className='landing'>
						<div className='landing-content'>
							<h1>Contact Us</h1>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
								possimus tempore ex cumque doloribus blanditiis facilis esse
								provident accusantium qui atque nostrum quos, cum corporis est
								cupiditate omnis repellat! Nihil!
							</p>
						</div>
                    </div>
                <div className="content-page">
                    <div className="image">
                        <img src={contact} alt=""/>
                    </div>
                    <div className="text-content">
                        <div className="content">
                            <h3 className='office' >Office <span className='branch' >Branch</span></h3>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quasi.</p>
                            <hr/>
                            <h3>+91XXXXXXXXXX</h3>
                            <h3>email@gmail.com</h3>
                        </div>
                    </div>
                </div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Contact;
