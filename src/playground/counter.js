import React, { Component } from 'react';

export class Counter extends Component {
    render() {
        const app = {
            info: " save to reload!!!",
            title: "Induction App",
            subtitle: "subtitle-React sample trying",
            options: []
        }
        const onFormSubmit = (e) => {
            e.preventDefault();
            console.log(e.target.elements.option.value, "element");
            let option = e.target.elements.option.value;
            if (option) {
                app.options.push(option);
                option = "";
            }
            console.log(app, "---");
        }
        const numbers = [90, 899, 1000];
        var num = numbers.map((number) => {
            return <p key={number}>Numbers: {number}</p>;
        });
        console.log(num)

        return (
            <div className="App">
                <h1 className="App-title">{app.title}</h1>

                {app.subtitle && <p className="App-intro">{app.subtitle}</p>}
                {/* <div>{app.info}</div> */}
                <div>{(app.options && app.options.length > 0) ? "more are your options" : "No Options"}</div>
                <p>{app.options.length}</p>
                <ol>
                    <li>list onee</li>
                    <li>list two</li>
                </ol>
                {/* {[67,90,"tes",undefined,null,true]}  show  values only */}
                {num}
                {
                    [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]
                }
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="option" />
                    <button>Add Button</button>
                </form>
            </div>
        );
    }
}

