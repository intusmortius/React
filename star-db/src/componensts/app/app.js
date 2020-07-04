import React, {Component} from 'react'
import Header from '../header'
import PlanetDetails from '../details/planet-details'
import PersonDetails from '../details/person-details'
import StarshipDetails from '../details/starship-details'
import ItemList from '../item-list'
import './app.css'

export default class App extends Component {


    render () {
        return (
            <div className='container'>
               <div className='app'>
                    <Header/>
                    <PlanetDetails/>
                    <ItemList/>
                    <PersonDetails/>
               </div>   
            </div>
        )
    }
}