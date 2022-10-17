// import React, { useState , useEffect} from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { useSelector } from 'react-redux';

function Cart() {

    // const [CartProducts, setCartProducts] = useState;
    const Products = useSelector((state)=>state.Cart)
    // console.log(Products)


    /////////////////////---STYLE---////////////////

    const Cart = styled.section`
        display:flex ;
        height:100% ;
        flex-direction:column ;
        padding-top:50px ;
        .cart{
            width: 540px;
            margin: 20px  ;
        }
        img{
            width:200px ;
            height:200px ;
            margin:auto ;
        }
    `;
  return (
    <>
    <Navbar/>
    <Cart className='container'>
        {Products.map((element)=>{
                return<div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={element.image} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{element.title}</h5>
                      <p className="card-text">{element.description}</p>
                      <h6 className='card-text'>Rs. {element.price}</h6>
                      <p className="card-text"><small className="text-muted"> {new Date().toGMTString()}</small></p>
                    </div>
                  </div>
                </div>
              </div>
        })}
    
    </Cart>
    
    </>
  )
}

export default Cart
