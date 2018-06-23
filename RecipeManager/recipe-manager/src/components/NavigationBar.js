import React, { Component } from 'react';
import './NavigationBar.css';
class NavigationBar extends Component {
    render() {
        return (
            <div  >

                <ul >
                    <li><a href="#home">Home</a></li>
                    <li><a href="#mealtype">Meal Type</a></li>
                    <li><a href="#dishtype">Dish Type</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a class="active" href="#about">About</a></li>
                    <li><a class="active" href="#about">About</a></li></ul>

            </div>
        );
    }
}
export default NavigationBar;