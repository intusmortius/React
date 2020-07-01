import React, {Component} from 'react'
import AppHeader from '../app-header'
import AppSearch from '../app-search'
import AppList from '../app-list'
import AddPanel from '../add-panel'
import AppFilter from '../app-filter'
import './app.css'

export default class App extends Component {
  
  maxId = 1;

  state = {
     prop : [
      this.createItem('Drink coffee'),
      this.createItem('Make React App')
    ],
    term: '',
    filter: 'active'
  };

  search(items, term) {
    if(term.length === 0 ) {
      return items;
    }

    return items.filter((el)=>{
      return el.label.indexOf(term) > -1;
    });
  }

  filter(items, name) {
    switch(name){
      case 'all':
        return items;
      case 'active':
        return items.filter((el) => !el.done);
      case 'done': 
        return items.filter((el)=> el.done);
      default:
        return items;
    }
    
  }

  createItem(label) {
    return {
      label,
      important: false,
      done:false,
      id: this.maxId++,
    };
  }

  deleteItem = (id) => {
    this.setState(({prop}) => {
      
      const idx = prop.findIndex((el) => el.id === id);

      const newProp = [...prop.slice(0, idx), ...prop.slice(idx + 1)];

      return {
        prop:newProp
      };

    });
  };

  addItem = (text) => {
    
    const newItem = this.createItem(text);

  
    this.setState(({prop}) => {
      const newArr = [...prop, newItem];

      return {
        prop: newArr
      };

    });

    console.log(text);
  };

  toggleProperty(arr, id, property) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = {...oldItem, [property]: !oldItem[property]};

    return [...arr.slice(0,idx), newItem, ...arr.slice(idx+1)];
    
  };
  
  onToggleDone = (id) => {
    
    this.setState(({prop}) => {

      return {
        prop: this.toggleProperty(prop, id, 'done')
      }

    });    

  };

  onToggleImportant = (id) => {
    
    this.setState(({prop}) => {

      return {
        prop: this.toggleProperty(prop, id, 'important')
      }

    });    
  };

  onSearch = (term) => {
    this.setState({term});
  }

  onFilterChange = (filter) => {
    this.setState({filter});
  }

  

  render() {

    const {prop, term, filter} = this.state;

    const visibleItems = this.filter(this.search(prop, term), filter);

    const doneCount = this.state.prop.filter((el) => el.done).length;

    const toDoCount = this.state.prop.length - doneCount;
 
    return (
      <div className='app col-lg-4'>
          <AppHeader todo = {toDoCount} done = {doneCount}/>
          <span className='search'>
            <AppSearch onSearch = {this.onSearch}  />
            <AppFilter 
            filter = {filter}
            onFilterChange = {this.onFilterChange}
            />
          </span>
          
          <AppList prop = {visibleItems} 
          onDeleted = {this.deleteItem}
          onToggleDone = {this.onToggleDone}
          onToggleImportant = {this.onToggleImportant}
          />
          <AddPanel onPanelAdd = {this.addItem}/>
      </div>    
    );
  }; 
};
