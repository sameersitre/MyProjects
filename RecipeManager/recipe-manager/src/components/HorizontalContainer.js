import React, { Component } from 'react';
import './HorizontalContainer.css';
//import Card from './Card'
class HorizontalContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

            recipes: [
                'Rasgulla', 'Gulab jamun', 'Chivda', 'Chakali', 'ojvdfijbdfj', 'gijgrijgi', 'hfuewhfwi'
            ]
        }

    }
    render() {
        return (
            <div class='hor-slide-container'>
                {this.state.recipes.map(name => (<div class='card' key={name}><b>{name}</b></div>))}


            </div>
        );
    }
}
export default HorizontalContainer;