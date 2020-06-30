import React from 'react'
import './app-header.css'

const AppHeader = ({todo, done}) => {
    return (
        <div className='app-header d-flex justify-content-between align-items-end'>
          <h1>Todo App</h1>
          <h2>To do {todo} Done {done}</h2>
        </div>
    );
  };

  export default AppHeader;