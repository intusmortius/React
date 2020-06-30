import React, {Component} from 'react'
import './add-panel.css'

export default class AddPanel extends Component {

    state = {
        label: ''
    };

    onLableChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onPanelAdd(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {

        return (
            <form className = 'add-panel' 
            onSubmit = {this.onSubmit}>
                <input type="text"
                onChange = {this.onLableChange}
                value = {this.state.label}
                />
                <button>Add</button>
            </form>
        );
    }
};
