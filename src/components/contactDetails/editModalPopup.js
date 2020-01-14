import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import EditContactDetailsClass from '../../components/contactDetails/editContactDetails';

export class AddEditModal extends Component {
    constructor(props){
        super(props)
        this.state = this.props.selectedData;
    }

    render() {
        return (
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Edit Contact Details
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <EditContactDetailsClass value={this.props.selectedData}/> 
            </Modal.Body>
          </Modal>
        );
    }
}

export default AddEditModal;