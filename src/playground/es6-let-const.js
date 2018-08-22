import React, { Component } from 'react';


export class SampleApp extends Component {
    render() {
        var namevar = "rml";
        var namevar = "***"; //using var - more initalization
        let namelet = "rm";   //using let - must one time intialization
        namelet = "valid let";
        const nameconst = "free";
        console.log(nameconst, "nameconst");

        function getpetname() {
            const petname = "kukku";
            return petname;
        }
        const petname = getpetname();   //using const - must 1 init and 1 declaration
        console.log(petname,"****")

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
                <h1>let concept page - 2</h1>
            </div>
        )
    }
}