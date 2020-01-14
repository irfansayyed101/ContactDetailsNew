import React, {Component} from 'react';
import '../common/css/header.css';
import Logout from '../components/login/logout';

class Header extends Component {
    render(){
        return (
            <div className="container-fluid" id="headerBG">
                <div id="header">
                    <div className="logo">
                        <img src="https://www.amdocs.com/amdocsOmega/images/logos/amdocswhite.svg" width="103px" height="42px" title="ANZ Logo" alt="ANZ Logo"/> 
                    </div>

                    <div className='logoutCls'>
                        <Logout/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;