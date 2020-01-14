import React, {Component} from 'react';
import '../common/css/header.css';
import {connect} from 'react-redux';

class LandingPage extends Component {
    render(){
        return (
            <div>
                <div >
                    {this.props.isLoginSuccess &&  
                    <img className='bg' src={'SeaImagea.jpg'} alt='seaimage' />}
                   
                   {!this.props.isLoginSuccess &&  
                    <img className='bg' src={'SeaImage1.jpg'} alt='seaimage' />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginSuccess: state.loginReducer.isLoginSuccess
    };
  }

export default connect(mapStateToProps)(LandingPage);