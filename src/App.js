import React, { Component } from 'react';
import classes from './App.css';
import ContactList from './components/ContactList'
import ContactDetail from './components/ContactDetail'
import { connect } from "react-redux";
class App extends Component {
  
  state = {
    peoples:[],
    clicked:false,
    selectedContact:null,
    serachItems:[]

    
  }
  

  handleClick(people) {
   const pdata = people;
    this.setState ({
      ...this.state,
      selectedContact:pdata,
      clicked:true
         
       })
  }
  filterList(event){
    var updatedList = this.state.peoples;
    updatedList = updatedList.filter(function(item){
      console.log(item);
      return item.general.firstName.search (
        event.target.value) !== -1;
    });
    this.setState({serachItems: updatedList});
  }

  
  componentDidMount(){
    fetch('./contacts.json').then(response => response.ok ? response.json() : Promise.reject(response.statusText))
    .then(json => {
       const data = json;
       this.setState ({
       peoples:data,
       serachItems:data
          
        })
      console.log(data);
    })
    .catch(e => console.error(e)); 
  }
  render() {
    const {serachdata} = this.props;
    const showDiv = this.state.clicked;
    let detail;
    if(showDiv){
      detail = <ContactDetail detail={this.state.selectedContact}/>;
    }
   
    
    return (
      <div >
       <div className= {classes.omponentsWrapper}>
          <div className={classes.leftHalf}>
            <form>
            <fieldset>
            <input type="text" className={classes.search} placeholder="Search" onChange={this.filterList.bind(this)}/>
            </fieldset>
            </form>
            {this.state.serachItems.map(letter =>
            <a href="javascript:void(0)" key={letter.contact.email}  list={letter} onClick={() => this.handleClick(letter)}>
            <ContactList list={letter}/>
             </a>
            
          )}
          </div>
          <div className={classes.rightHalf}>
          {detail}
          </div>
          </div>
        
       
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    serachdata:state.serachItems
    
  };
  
 
}

//export default App;
export default connect(mapStateToProps)(App);
