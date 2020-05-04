import React from 'react'
import './style.css'
import logo from '../../vectors/Rectangle.png'

class IndexPage extends React.Component {


    render() {
        return (
            <div className={'index-page'}>
                <div className='container'>
                <div className='landing'>
                        <div className='head'>
                            <p>We are a digital agency based on technology</p>
                            <div className='btn'>
                                Explore
                            </div>
                        </div>
                        <div className='logo-svg'>
                            <img alt='' src={logo} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IndexPage