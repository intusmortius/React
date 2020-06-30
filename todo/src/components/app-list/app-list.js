import React from 'react'
import AppListItem from '../app-list-item'
import './app-list.css'

const AppList = ({prop, onDeleted, onToggleDone, onToggleImportant}) => {

  const elems = prop.map((item) => {

    const {id, ...itemProps} = item;

    return (
      <li key={id}><AppListItem  
      {...itemProps}
      onDeleted = {() => onDeleted(id)}
      onToggleDone = {() => onToggleDone(id)}
      onToggleImportant = {() => onToggleImportant(id)}
      /></li>
    );
  });
  
  return (
      <ul className='list-group app-list'>
        {elems}
      </ul>
    );
  };

  export default  AppList;