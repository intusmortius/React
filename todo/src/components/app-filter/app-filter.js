import React, {Component} from 'react'
import './app-filter.css'

export default  class AppFilter extends Component {

  render() {
    return (
      <span className='col-lg-4 d-flex justify-content-end'>
        <button className='btn btn-info' type="button">All</button>
        <button className='btn btn-outline-secondary' type="button">Active</button>
        <button className='btn btn-outline-secondary' type="button">Done</button>
      </span>

    );
  };
}
