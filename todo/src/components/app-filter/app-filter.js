import React, {Component} from 'react'
import './app-filter.css'

export default  class AppFilter extends Component {

  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ];
  
  render() {

      const {onFilterChange} = this.props;

      const buttons = this.buttons.map(({name, label})=>{
      
      const isActive = this.props.filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

      return (
      <button className= {`btn  ${clazz}`}
              type="button"
              key = {name}
              onClick = {() => onFilterChange(name)}
              >{label}</button>
      )
    });

    return (
      <span>
       {buttons}
      </span>

    );
  };
}
