import React from 'react';
import './style.css'

class Header extends React.Component {
    render() {
        return (
            <div className='navbar-container'>
                <div className='navbar'>
                    <div className='logo-container'>
                        <div className='logo'>
                            SmokeTrees
                        </div>
                    </div>
                    <div style={{flex: '1'}} />
                    <div className='navigation'>
                        <ul className='ul-list'>
                            <li>
                                About
                            </li>
                            <li>
                                Projects
                            </li>
                            <li>
                                Team
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header