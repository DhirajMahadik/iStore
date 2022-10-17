import React from 'react'
import styled from 'styled-components'
import background_Image from '../Images/Web_Background.jpg'
import Categories from './Categories';
import Navbar from './Navbar';
import NewProducts from './NewProducts';


function Home() {



// Styled Components ///////////////////////

  const Section = styled.section`
 background-image: url(${background_Image});
	height: 100vh;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
  display:flex ;

.banner_content{
  width:800px;
  margin:auto ;
  background-color: rgba(0,0,0, .20 );
  text-align:center ;
  padding-bottom:20px ;
  border-radius:20px ;
}

h1{
  text-transform:uppercase;
  font-size:60px;
  font-weight:600 ;
}

 `;

 const Button = styled.button`
  background-color: black ;
  border:none;
  color: #ffff;
  width:150px ;
  border-radius:10px ;

  a{
    text-decoration:none ;
    color: #ffff;
  }

  :hover{
  transform:scale(1.1);
  transition-duration: 1s ;
  }
 `;


  return (
    <>
    <Navbar Products ="Products" Collections ="Collection"/>
    <Section>
    <div className ="banner_content">
    <h1>Final</h1>
    <h1>Clearance</h1>
    <h4>Take 20% Off "Sale Must Haves"</h4>
    <Button  className='banner_button' ><a href='#new'>SHOP</a> </Button>
    </div>
    </Section>
    <div id='collection'>
    <Categories/>
    </div>
  <div id='new'>
  <NewProducts/>

  </div>
    
    </>
    
  )
}

export default Home 
