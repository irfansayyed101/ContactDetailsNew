import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import history from '../../common/history';

class Logout extends Component {
    state = {
        navigate : false
    }

    logout = () => {
        this.setState({navigate : true});
        this.props.logOut();
    }

    render() {
        let {isLoginSuccess} = this.props;
        const {navigate} = this.state;
        if(isLoginSuccess === false && navigate === true){
            history.push('/');
        }
        return (
            <div>
                {isLoginSuccess && <Button onClick={this.logout} > Logout </Button>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginSuccess: state.loginReducer.isLoginSuccess,
        loginError: state.loginReducer.loginError,
        loginErrroMessage : state.loginReducer.errorMessage,
        isLoginPending : state.loginReducer.isLoginPending
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        logOut: ()  => dispatch({type: 'LOGOUT_SESSION'})
    };
  }
export default connect(mapStateToProps,mapDispatchToProps)(Logout);