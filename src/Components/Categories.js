import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Accessories from '../Images/Accessories.jpg';
import Men from '../Images/men.jpg';
import Woman  from '../Images/woman.jpg';
function Categories() {
    const Category_wrapper = styled.section`
    background-color:lightgray;
    
    h1{
        text-align:center ;
        padding-top: 20px;
    }

    .container-fluid{
        display: flex;
    flex-direction:row ;
    /* padding:20px; */
    background-color:lightgray;
    }
    .category{
        padding:50px ;
        margin: auto ;

    }

    .card_button{
        background-color: #ffff ;
        border:1px solid lightgray;
        color: black;
        width:150px ;
        text-decoration: none;
        margin: 10px auto ;
        text-align:center ;
        padding:3px;
        border-radius:10px ;
        position:absolute;
        bottom: 0;

    }

    .card_button:hover{
        background-color:lightgray;
        transform:scale(.70) ;
        transition-duration: 1s;
    }

    .card{
        width: 18rem;
        align-items: center;
    }
    `;

    return (
        <Category_wrapper>
            <h1>Categories</h1>
            <div className='container-fluid'> 
            <div className='category'>
                <div className="card">
                    <img src={Men} className="card-img-top" alt="..." />
                    
                     <Link to="Mens" className="card_button">MEN'S</Link>
                    
                </div>
            </div>

            <div className='category'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={Woman} className="card-img-top" alt="..." />
                    
                        
                        <Link to="Woman" className="card_button">WOMAN'S</Link>
                    
                </div>
            </div>

            <div className='category'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={Accessories} className="card-img-top" alt="..." />
                    
                        
                        <Link to="Accessories" className="card_button">ACCESSORIES</Link>
                    
                </div>
            </div>
            </div>
        </Category_wrapper>
    )
}

export default Categories
