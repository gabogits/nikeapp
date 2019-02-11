import React, { Component, Fragment } from 'react';
import Header from "./components/Header";
import Grid from "./components/Grid";
import Filters from "./components/Filters";
import Content from "./components/Content";
let APIbase = 'https://nikeapi.herokuapp.com/api/v1/shoes?all=true';


function removeParam(key, sourceURL) {
   
    var rtn = sourceURL.split("?")[0],
    param,
    params_arr = [],
    queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
if (queryString !== "") {
    params_arr = queryString.split("&");
    for (var i = params_arr.length - 1; i >= 0; i -= 1) {
        param = params_arr[i].split("=")[0];
        if (param === key) {
            params_arr.splice(i, 1);
        }
    }
    rtn = rtn + "?" + params_arr.join("&");
    return rtn;
}

}

function unCheckOrRemoveClass (divid, type) {
    const elements = document.querySelectorAll(`#${divid} ${type}`);
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (!element.disabled && type == "input[type='checkbox']") {
            element.checked = false;
        }
        if(type == "button") {
            element.classList.remove("on");
        }
    }
}

class App extends Component {

    constructor() {
        super();
        this.state = {
            shoes: [],
        };
    }

    componentDidMount() {
        fetch(APIbase)
            .then(response => response.json())
            .then(data => this.setState({ shoes: data.data }));
    }

    checkFilters = (e, typeFilter,  valueFilter, parentDiv) => {

        if(e.target.nodeName === "INPUT") {
            let checkStatus = e.target.checked;
            const checks = document.querySelectorAll(`#${parentDiv} input`);
            unCheckOrRemoveClass(parentDiv, "input[type='checkbox']");
            APIbase = removeParam(typeFilter, APIbase);
        
            if (checkStatus) {
                APIbase = `${APIbase}&${typeFilter}=${valueFilter}`
                checks[Number(e.target.value)].checked = true;
            }
        }
        if(e.target.nodeName === "BUTTON") {
             let buttonStatus = false; 
             const buttons = document.querySelectorAll(`#${parentDiv} button`);
           
             if(e.target.classList.contains('on')) {
                buttonStatus = true;
            }
            APIbase = removeParam(typeFilter, APIbase);
            unCheckOrRemoveClass(parentDiv, "button");
            if (!buttonStatus) {
                 APIbase = `${APIbase}&${typeFilter}=${valueFilter}`
                 buttons[Number(e.target.value)].classList.add("on");
            }
        }
       
        this.callFetch(APIbase)

    }

    callFetch (url) {
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ shoes: data.data }));
        console.log(APIbase)
    }


    render() {

        return (

            <Fragment>
                <Header/>
                <Grid>
                    <Filters fn ={this.checkFilters} />  
                    <Content products = {this.state.shoes}/> 
                </Grid> 
            </Fragment>

        );
    }
}

export default App;