import React from "react";
import {ProductConsumer} from "../../context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CartItem({item,value}){
    console.log(item)
    const{id,title,img ,price,total,cart,count} =item;
    const {increment,decrement,removeItem }= value;
    return(
        <div className="row my-2 text-capitalized text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img } style={{width:"5rem",height:"5rem"}} className="img-fluid"/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product: </span>{title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price: </span>${price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-secondary mx-1" onClick={()=>{decrement(id)}} >-</span>
                        <span className="btn btn-secondary mx-1">{count}</span>
                        <span className="btn btn-secondary mx-1" onClick={()=>{increment(id)}} >+</span>
                    </div>
                </div>
            </div>
             {/* */}
             <div className="col-10 mx-auto col-lg-2">
             <div className="text-danger" onClick={()=>{removeItem(id)}}>
               <FontAwesomeIcon icon="trash"/>
            </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total :  ${total}</strong>
            </div>
        </div>
        );
}
