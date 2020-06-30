import React, {Component} from 'react'
import './app-search.css'
import AppFilter from '../app-filter'

export default class AppSearch extends Component {
    
    
  
  render() {
    
    const {onSearch} = this.props;

      return ( 
          <span className='app-search d-flex justify-content-between'>
            <input className='col-lg-8' type="text" name="" id="" placeholder="SOME"
            onChange = {onSearch}
            />
            <AppFilter/>
          </span>
      );
    };
  }
  
