import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    const Footer = styled.footer`
    .bottom{
        height:50px ;
        text-align:center ;
        background-color:lightgray;
        color:black ;
        display:flex ;
        
    }
    p{
        margin: auto;
    }
    `;


    const Footer_content = styled.section`
    height: 300px;
    background-color:darkgray;
    display: flex;
    flex-direction:row ;
    justify-content:space-between ;

    .About_company{
        width:350px ;
        height:100% ;
        margin-left:200px ;
        padding-top:30px ;
    }

    .Info{
        width:450px ;
        height:100% ;
        margin-right:200px ;
        padding-top:30px ;
        display:flex ;
        flex-direction:column ;
        /* background-color:lightpink ; */
    }

    .Icons{
    
        height:70px ;
        /* background-color:blue ; */
        /* margin:10px ; */
        display:flex ;
        flex-direction:row ;
        align-items:center ;

        
    }

    .icon{
        width:50px ;
        height:30px ;
    }

    .icon-div{
        display:flex ;
    }
    
    `;
    return (
        <Footer>
        <Footer_content >
            
            <div className='About_company'>
                <h5>About the company</h5>
                <p> qertyuio gfd sds react-fontawesome now supports forwardRef for version 0.2.x or above. This was a breaking change so if you are using React older than version 16.3.0 choose the 0.1.x version of this component.</p>

            </div>

            <div className='Info'>
                <div className='Icons'>
                    <div className='icon-div'>
                        <FontAwesomeIcon icon={faLocationDot} className="icon" />
                        <p>Viman Nagar - Pune 000 443</p>
                    </div>

                </div>

                <div className='Icons'>
                    <div className='icon-div'>
                        <FontAwesomeIcon icon={faPhone} className="icon" />
                        <p>+91 12345 67890</p>
                    </div>
                </div>

                <div className='Icons'>
                    <div className='icon-div'>
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <p>dhirajmahadik9221@gmail.com</p>
                    </div>
                </div>
            </div>
        </Footer_content>
        <div className='bottom'>
                <p><FontAwesomeIcon icon={faCopyright}/> 2022 DM iStore </p>             
        </div>
        </Footer>
    )
}

export default Footer
