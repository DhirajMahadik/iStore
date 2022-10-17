import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function Navbar(props) {

    const count = useSelector((state) => state.Cart)


    // Styled Components ///////////////////////////

    const Nav = styled.nav`
    height: 50px ;
    
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
        margin-right:20px ;
        margin-top:5px ;
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
                        <Link className="nav-link " aria-current="page" to="/">Home</Link>
                        <a className="nav-link" href="#new">{props.Products}</a>
                        <a className="nav-link" href="#collection">{props.Collections}</a>
                        {/* <h5 className='nav-link'><FontAwesomeIcon icon={faCartShopping}/> {count.length}</h5> */}
                        <button type="button" className="btn btn-sm  position-relative">
                       <Link to="/cart"><FontAwesomeIcon icon={faCartShopping}/></Link> 
                            <span className="position-absolute top-3 start-100 translate-middle badge rounded-pill bg-danger">
                                {count.length}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </Nav>

    )
}

export default Navbar
