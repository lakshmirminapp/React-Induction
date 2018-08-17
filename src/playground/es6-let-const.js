import React, { Component } from 'react';


export class SampleApp extends Component {

    render() {
        //var namevar = "rml";
        // var namevar = "***"; //var more initalization
        //let namelet = "rm";   //must one time intializ 
        //namelet = "valid let";
        //const nameconst = "free";
        //console.log(nameconst, "nameconst");

        // function getpetname() {
        //     const petname = "kukku"
        //     // console.log(petname,"-----")
        //     return petname;
        // }
        // const petname = getpetname();
        // console.log(petname,"*************")

        //block scoping
        const fullname = "lakshmi rm";
        let firstname = "==";
        if (fullname) {
            firstname = fullname.split(" ")[0];
            console.log(firstname, "firstname");
        }
        console.log(firstname, "--firstname--");
        return (
            <div>
                <h1>let concept New page</h1>
            </div>
        )
    }
}