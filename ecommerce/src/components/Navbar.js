import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Navbar extends Component{
    render(){
        return(
         <div>
            <nav className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-dark">
                <Link className="navbar-brand" to="/">
                    Logo
                </Link>  
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>   
                <Link to="/" className="btn btn-light ml-auto">
                    cart
                </Link>
            </nav>
         </div>
        );
    }
}
