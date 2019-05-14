import React, {Component} from "react";
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";


export default class Details extends Component{
    render(){
        return(
         <ProductConsumer>
            {value=>{ const  {id,company ,img,info ,price,title,inCart} =value.detailProduct;
                return (
                <div className="container py-5">
                    {/*title*/}
                    <div className ="row">
                        <div className="col-10 mx-auto text-center text-slanted my-5">
                            <h1>{title}</h1>
                        </div>
                    </div>
                    {/*end title*/}
                    {/*product info*/}
                    <div className="row">
                        <div className="col-10 mx-auto  col-md-6 my-3 text-capitalize">
                            <img src={img} className="img-solid" alt="product"/>
                        </div>
                        {/*product text*/}
                        <div className="col-10 mx-auto  col-md-6 my-3 text-capitalize">
                            <h2>model: {title}</h2>
                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2"> made by :<span className="text-uppercase">{company}</span></h4>
                            <h4><strong>price: <span>$</span>{price}</strong></h4>
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">Some info about the product</p>
                            <p className="text-muted">{info}</p>
                            <Link className ="btn btn-secondary" to="/">
                                Back to products
                            </Link>
                            <Link
                            disabled={inCart?true:false}
                            onClick={()=>{value.addToCart(id);value.openModal(id);}}
                            className ="btn btn-secondary"
                            to="#"
                            >
                                {inCart?"inCart":"add to cart"}
                            </Link>
                        </div>
                    </div>
                </div>
                )
            }}
         </ProductConsumer>
        );
    }
}
