import React, { Component } from 'react';
import './NavigationBar.css';
class NavigationBar extends Component {

    constructor(){
        super();
        this.state={
            display:"none",
        }
    }
    btnSignInClick() {
        //this.setState({ showStore: "flex" });  
    }

    btnSubmitClick() {
        alert("submit clicked")
    }
    render() {



        return (

            <div  >

                <ul class='leftposition' >
                    <li class="list1"><a href="#home">Home</a></li>
                    <li class="list1"><a href="#mealtype">Meal Type</a></li>
                    <li class="list1"><a href="#dishtype">Dish Type</a></li>
                    <li class="list1"><a href="#contact">Contact</a></li>
                    <li ><a class="active" href="#signin" onClick={this.btnSignInClick.bind(this)}>Sign In</a></li>
                    <li ><a class="active" href="#signup" float="right" >Sign Up</a></li>

                    <li display={this.state.display} >

                        <input class="inputbox1" placeholder="username" />
                        <input class="inputbox2" placeholder="password" />
                        <button class="button1" onClick={this.btnSubmitClick.bind(this)}>Submit</button>
                    </li>
                </ul>


            </div>
        );
    }
}
export default NavigationBar;