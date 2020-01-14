import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';

class EditContactDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : this.props.value.id,
            name : this.props.value.name,
            email : this.props.value.email,
            city : this.props.value.address.city,
            phone : this.props.value.phone,
            companyname : this.props.value.company.name,
            website : this.props.value.website
        }
    }

    handleSave = () => {
        this.props.onUpdateContact({contact : this.state});
    }

    handleChange = (type) => {
    	this.setState({
        	[type]: this.textInput.value,
        });
    }

    updateInputValue= (evt) =>{
        this.setState({
          [evt.target.id]: evt.target.value
        });
      }

    render() {
        return (
            <div className="EditDetails">
            <form> 
                <div className="form-group row"> 
                    <label for="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.updateInputValue}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label for="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.updateInputValue}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="city" className="col-sm-2 col-form-label">City</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id='city' value={this.state.city} onChange={this.updateInputValue}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label for="phone" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id='phone' value={this.state.phone} onChange={this.updateInputValue}/>
                    </div>
                </div>
                
                <div className="form-group row">
                    <label for="website" className="col-sm-2 col-form-label">Website</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id='website' value={this.state.website} onChange={this.updateInputValue}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label for="companyname" className="col-sm-2 col-form-label">Company Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id='companyname' value={this.state.companyname} onChange={this.updateInputValue}/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-10 offset-sm-5">
                        <Button onClick={this.handleSave}>Save</Button>
                    </div>
                </div>
            </form>
          </div>
        );
    }
}

 /* Get only the contactDetails array */
const mapStateToProps = state => {
    return {
        contactData : state.contacts.contactData
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateContact : (payload) => dispatch({type: 'UPDATE',payload:{val:payload}})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditContactDetails);