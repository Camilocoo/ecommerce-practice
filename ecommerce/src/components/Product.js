import React, {Component} from "react";
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Product extends Component{
    render(){
        const {id,title,img,price,inCart}=this.props.product;
        return(
         <div>
            <div className ="co-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="p-5" onClick={()=>console.log("you clicked me on img container")}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                        <button class="btn btn-primary" onClick={()=>{console.log("added to cart")}} disabled={inCart?true:false}> {inCart?<p className="text-capitalize mb-0" disabled>in cart</p>:(<FontAwesomeIcon icon="cart-plus"/>)}</button>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className ="font-italic mb-0"><span className="mr-1">${price}</span> </h5>
                    </div>
                </div>
            </div>
         </div>
        );
    }
}