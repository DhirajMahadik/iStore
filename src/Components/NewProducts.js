import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import Products_data from '../products.json'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';

function NewProducts() {

    const dispatch = useDispatch();

    const [product, setproduct] = useState([]);

    const fetch_products = () => {
        // fetch('https://fakestoreapi.com/products/')
        //     .then((response) => {
        //         setproduct(response.json)
        //         console.log(product)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
        setproduct(Products_data);

    }

    useEffect(() => {
        fetch_products();
        // console.log(product
        // eslint-disable-next-line
    }, [])

    const Add =(Element)=>{
        dispatch(addToCart(Element))
    }


const Wrapper = styled.section`
h1{
    text-align:center ;
    padding:20px ;
}
`;

    const Cart = styled.div`
    display:flex ;
    flex-direction:row ;
    justify-content:space-between ;
    flex-wrap:wrap ;
   
    img{
        width:250px ;
        height:200px ;
        margin:auto ;
    }
    .card {
        width: 18rem;
        height:400px ; 
        margin-bottom:30px ;
        padding-top:20px ;
        background-color: lightgray;
        border:none ;
    }

    `;

    const Button = styled.button`
    background-color: black ;
    border:none;
    color: #ffff;
    width:150px ;
    border-radius:10px ;
    margin: auto;
    

    :hover{
    transform:scale(1.1);
    transition-duration: 1s ;
    }
    `;


    return (
    <Wrapper>
        <h1>New Products</h1>
        <Cart className='container'>
            
            {product.map((element) => {
                return <div className="card " key={element.id}>
                    <img src={element.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{element.title.slice(1,15)}</h4>
                        <p className="card-text">Category : {element.category}</p>
                        <p className="card-text">Price : {element.price}</p>
                        <Button href="#"  onClick={()=>Add(element)}>Add To Cart</Button>
                    </div>
                </div>
            })}

        </Cart>
        </Wrapper>


    )
}

export default NewProducts
