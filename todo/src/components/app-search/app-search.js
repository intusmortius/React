import React, {Component} from 'react'
import './app-search.css'


export default class AppSearch extends Component {
    
  state = {
    term: ''
  }  


  onSearch = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onSearch(term);
  }


  render() {    

      return ( 
          <span className='app-search d-flex justify-content-between'>
            <input type="text" name="" id="" placeholder="SOME"
            onChange = {this.onSearch}
            value = {this.state.term}
            />            
          </span>
      );
    };
  }
  
