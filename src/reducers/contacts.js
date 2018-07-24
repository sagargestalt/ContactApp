export const CONTACT_CLICKED = "CONTACT_CLICKED";

fetch('../contacts.json').then(response => response.ok ? response.json() : Promise.reject(response.statusText))
.then(json => {
    initialState.peoples = json;
    initialState.serachItems = json;
  
 
})
.catch(e => console.error(e)); 
const initialState = {
    peoples:[],
    clicked:false,
    selectedContact:null,
    serachItems:[]
}

export default function contacts(state = initialState, action = {}) {
    switch (action.type) {
      case CONTACT_CLICKED:
        return action.type;
     
      default:
        return state;
    }
  }