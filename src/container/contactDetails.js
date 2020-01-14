import React, {Component} from 'react';
import { connect } from 'react-redux';

import ContactDetail from '../components/contactDetails/contactDetails';
import AddEditModal from '../components/contactDetails/editModalPopup';
import {ButtonToolbar} from 'react-bootstrap';
import history from '../common/history'; 


class ContactDetails extends Component {
    constructor(){
        super();
        this.state = {
            addModelShow : false,
            selectedData: {}
        }
    }

    /* 
        Fetching the contact.json file and storing it in the store
    */
    componentDidMount(){
        fetch('contact.json',{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
        .then(res => res.json())
        .then((data) => {
                /* Calling the reducer and storing the result into the array */  
          this.props.onContactFetch({data:data})
        })
        .catch(console.log)
    }
    
    handleClick = (event)=> {
        this.setState({addModelShow:true,selectedData:event})
    }
    render() {
        let addModalClass = () => this.setState({addModelShow:false});
        return (
            <div>
                
                {!this.props.isLoginSuccess && history.push('/')}

                <ButtonToolbar> 
                     <AddEditModal show={this.state.addModelShow} onHide={addModalClass} selectedData={this.state.selectedData}/>
                </ButtonToolbar>
    
                {this.props.contactDet.map((person, index) => (
                      <ContactDetail key={index} value={person} callClick={() =>this.handleClick(person)}/>
                ))}

            </div>
        )
    }
} 

    /* Mapping the state properties in store to props for local consumption */
const mapStateToProps = state => {
    return {
        contactDet : state.contacts.contactdata,
        isLoginSuccess : state.loginReducer.isLoginSuccess
    }
};
    /* Dispatching the actions to the store */
    
const mapDispatchToProps = dispatch => {
    return {
        onUpdateContact : () => dispatch({type: 'UPDATE',payload:{val:this.state.selectedData}}),
        onContactFetch : (payload) => dispatch({type: 'SAVE_CONTACT',payload:{val:payload}})
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ContactDetails);
