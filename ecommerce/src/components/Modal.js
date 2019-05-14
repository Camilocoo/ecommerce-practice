import React, {Component} from "react";
import {ProductConsumer} from "../context";
import {Link } from "react-router-dom";



export default class Modal extends Component{
    render(){
        return(
            <ProductConsumer>
                    {(value)=>{
                        const {modalOpen ,closeModal}=value;
                        const {img, title ,price }= value.modalProduct;

                        if(!modalOpen){
                            return null
                        }else{
                        return(<div className ="container sticky-top bg-white">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                        <h5>Item added to the cart</h5>
                                        <img className="img-fluid" src={img} alt="product"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price: $ {price}</h5>
                                        <Link  className="btn btn-secondary" onClick={()=>closeModal()} to="/">
                                            Store
                                        </Link>
                                        <Link to="/cart" className="btn btn-secondary" onClick={()=>closeModal()} >
                                            continue shopping
                                        </Link>
                                    </div>
                                </div>
                            </div>);
                        }

                    }}
            </ProductConsumer>
        );
    }
}