import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
// import { faCartShopping } from '@fortawesome/free-regular-svg-icons'



function Navbar() {

    const count = useSelector((state)=>state.Cart)


    // Styled Components ///////////////////////////

    const Nav = styled.nav`
    height: 40px ;
    
    h5{
        padding-bottom: 0;
    }
    
    samp {
        color:red ;
    }

    .navbar-brand{
        font-size: 30px;
        font-family:sans-serif ;
        font-weight:600 ;
        

    }

    .collapse{
        flex-direction:row ;
        justify-content:flex-end ;
        
    }

    .nav-link{
        color:black;
        align-items:center ;
    }

    

    .navbar-nav{
        align-items:center ;
    }
    `;

    return (
        
            <Nav className="navbar fixed-top navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="">DM<samp>_iSTORE</samp></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link " aria-current="page" to ="/">Home</Link>
                            <a className="nav-link" href="#new">Products</a>
                            <a className="nav-link" href="#collection">Collections</a>
                            <h5 className='nav-link'><FontAwesomeIcon icon={faCartShopping}/> {count.length}</h5>
                        </div>
                    </div>
                </div>
            </Nav>
        
    )
}

export default Navbar
