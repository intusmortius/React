import React, {Component} from 'react'
import './app-list-item.css'

export default  class AppListItem extends Component {

   
    render() {

        const {label, onDeleted, onToggleDone, onToggleImportant, important, done} = this.props;     
        
        let classNames = '';
        

        if(done) {
            classNames += 'done';
        }

        if(important) {
            classNames += ' important';
        }


        return (
        <span className='list-group-item app-list-item d-flex justify-content-between'>
            <span className = {classNames} onClick = {onToggleDone}>{label}</span>
            <span>
            <button className='btn btn-outline-success btn-sm' type='button' onClick = {onToggleImportant}>
                <i className='fa fa-exclamation'></i>
            </button>
            <button className='btn btn-outline-danger btn-sm' type='button' onClick = {onDeleted}>
                <i className='fa fa-trash-o'></i>
            </button>
            </span>
        </span>
        );
    }

};

