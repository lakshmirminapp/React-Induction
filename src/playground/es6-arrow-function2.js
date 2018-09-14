import React, { Component } from 'react';


export class ES6ArrowApp2 extends Component {
    render() {
        //argument object - with arrow functions
        const add = (a, b) => {
            console.log(arguments); //ES5 only used "arguments"
            return a + b;
        }
        console.log(add(5, 6, 1005));
        const user = {
            name: "lakshmi",
            cities: ["Boston", "New Yark", "califonia"],
            // printplaceLived: function() {
            //     this.cities.forEach((city) => {
            //         console.log(this.name + " has lived in" +city);
            //     });
            // }  // es5          
            printplaceLived() {
                return this.cities.map((city) => this.name + " has lived in " + city + "!");
                // return this.cities.map((city) => {
                //     return this.name + " has lived in " + city + "!";
                // });
                // this.cities.forEach((city) => {
                //     console.log(this.name + " has lived in" + city);
                // });
            }
        }
        // user.printplaceLived();
        console.log(user.printplaceLived(), "es6arrow");

        const multiplier = {
            numbers: [10, 20, 30],
            multiplyBy: 2,
            multiply() {
                return this.numbers.map((numbers) => this.multiplyBy * numbers);
            }
        }
        console.log(multiplier.multiply(), "multiply");
        return (
            <div>
                <h1>es6 arrow function sample</h1>
            </div>
        );
    };
}