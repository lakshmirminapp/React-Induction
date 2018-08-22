import React, { Component } from 'react';


export class ES6ArrowApp extends Component {
    render() {
        const square = function (x) {  //ES5
            return x * x;
        }
        console.log(square(100));

        // const squareArrow = (x) => {   //ES6
        //     console.log("arrow func:", x+x);
        // }
        // squareArrow(23);

        const squareArrow = (x) => {   //ES6
            return (x + x);
        }
        console.log("arrow func:", squareArrow(9));

        const squareMinArrowFunc = (x) => console.log("arrow minized func:", x * x);
        squareMinArrowFunc(7);
        
        let firstname;
        const getFirstName = (fullname) => {
            if (fullname) {
                firstname = fullname.split(" ")[0];
                // console.log(firstname, "firstname");
            }
            return firstname;
        }
        console.log("getfirstname", getFirstName("John smith"));

        const getFirstNameMinFunc = (fullname) => console.log(fullname.split(" ")[0]);
        getFirstNameMinFunc("peter england");
        return (
            <div>
                <h1>ES6ArrowApp page - 3</h1>
            </div >
        )
    }
}