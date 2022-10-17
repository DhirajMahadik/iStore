import React, { useEffect, useState } from 'react'
import product_data from '../products.json'
import styled from 'styled-components'
import Navbar from './Navbar'

function Collections(props) {
    const [products, setProducts] = useState([])
    const filtered_data = product_data.filter((element) => {
        return element.category === props.category;
    })

    useEffect(() => {
        setProducts(filtered_data);
        // eslint-disable-next-line
    }, [])






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
    <>
    <Navbar/>
        <Wrapper>
            <h1>{props.heading}</h1>
            <Cart className='container'>

                {products.map((element) => {
                    return <div className="card " key={element.id}>
                        <img src={element.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">{element.title.slice(1, 15)}</h4>
                            <p className="card-text">Category : {element.category}</p>
                            <p className="card-text">Price : {element.price}</p>
                            <Button href="#" className="btn btn-primary">Add To Cart</Button>
                        </div>
                    </div>
                })}

            </Cart>
        </Wrapper>
        </>


    )
}

export default Collections;
