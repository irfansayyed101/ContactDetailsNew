import React from 'react';
import '../../common/css/details.css';

const contactDetails = (props) => (
    <div className="ContactDetails" onDoubleClick={()=> props.callClick(props)}>
      <div> <p className='personName'> {props.value.name} </p> </div>
       <ul id="my-contacts">
            <li> {props.value.email}</li>
            <li> {props.value.address.city}</li>
            <li> {props.value.phone}</li>
            <li> {props.value.website}</li>
            <li> {props.value.company.name}</li>
       </ul>
    </div>
);

export default contactDetails;
