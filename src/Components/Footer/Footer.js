import React from 'react';
import './style.css'

class Footer extends React.Component{
    render() {
        return(
            <div className='footer'>
                <div className='first-card'>
                    <h1>How can we help you?</h1>
                </div>
                <div className='second-card'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, laborum est. Nesciunt eligendi dignissimos veritatis at asperiores magnam ipsa! Quos impedit consequatur temporibus recusandae consequuntur iure illo expedita architecto voluptatum.</p>
                </div>
            </div>
        );
    }
}

export default Footer;