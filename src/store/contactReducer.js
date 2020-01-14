const initialState = {
    contactdata: []
};
const UPDATE = 'UPDATE';
const SAVE_CONTACT = 'SAVE_CONTACT';
const LOGOUT_SESSION = 'LOGOUT_SESSION';

const getUpdatedItem = (state , action) => {
    return state.contactdata.map((item, index) => {
        // Find we need to find the matching id 
        if(item.id === action.payload.val.contact.id) {
          // Return a new object
          return {
            ...item,  // copy the existing item and update the values
            name : action.payload.val.contact.name,
            email :  action.payload.val.contact.email,
            address : {
                ...item.address,
                city: action.payload.val.contact.city
            },
            phone : action.payload.val.contact.phone,
            website : action.payload.val.contact.website,
            company : {
                ...item.company,
                name : action.payload.val.contact.companyname
            }
          }
        }
        // We need to keep the rest of the items unchanged.
        return item;
      });
}

const reducer = (state = initialState, action) => {
    if(action.type === UPDATE){
        let arr = getUpdatedItem(state, action);
        return {
            ...state.contactdata,
            contactdata : arr
        }
    }
    if(action.type === SAVE_CONTACT){
        return {
            ...state.contactdata,
            contactdata : action.payload.val.data
        }
    }
    if(action.type === LOGOUT_SESSION){
        return {
            ...state.contactdata,
            contactdata : []
        }
    }
    return state;
};


export default reducer;

