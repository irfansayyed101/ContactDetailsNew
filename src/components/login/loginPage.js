import React, {Component} from 'react';
import '../../common/css/loginLogout.css';
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap';
import history from '../../common/history'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        };
    }

        /* Dispatch the event with email and password as payload to reducer */
    onSubmit = () => {
        this.props.login(this.state.email, this.state.password);
      }

    render() {
        let {isLoginSuccess, loginError,loginErrroMessage} = this.props;
        return (
            <div className="login-form">
            <form >
                <h2 className="text-center">Sign In</h2>   
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                        <input type="text" className="form-control" placeholder="Username" onChange={e => this.setState({email: e.target.value})} required="required"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                        <input type="password" className="form-control" placeholder="Password" onChange={e => this.setState({password: e.target.value})} required="required"/>
                    </div>
                </div>        
                <div className="form-group">
                        <Button onClick={this.onSubmit}>Log in</Button>
                </div>
                <div className="message">
                    { loginError && <div>{loginErrroMessage}</div> }
                    {loginErrroMessage}
                    {isLoginSuccess && history.push('/ContactDetails')}
                </div>
            </form>
        </div>
        );
    }
}
    /* Get the login related infomation from reducer */
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
        login: (email, password)  => dispatch({type: 'SET_LOGIN_PENDING',
                                              payload:{email:email,
                                                       password:password}})
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(Login);
