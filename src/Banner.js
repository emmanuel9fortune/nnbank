import { ArrowBackRounded, ArrowForwardRounded } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './banner.css'
import { Link } from 'react-router-dom';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
    position: relative;
    z-index: -1px;
    ::-webkit-scrollbar{
        display: none;
    }
`;

const Slide = styled.div`
    height: 93vh;
    width: 100%;
    flex-shrink: 0;
    background-position: center;
    background-size: cover;
    mask-image: linear-gradient(
        to bottom,
        skyblue,
        blue
    );
    border-bottom-right-radius: 200PX;
    animation: animate 2s 1;
    mask-image:linear-gradient(
        to bottom,
        rgba(0,0,0,0),
        rgba(0,0,0,1),
        rgba(0,0,0,1),
        rgba(0,0,0,1)
    ) ;

    @keyframes animate {
        0%{
            opacity: .4;
        }
        50%{
            opacity: .6;
        }
        100%{
            opacity: 1;
        }
    }
`;


function Banner({images=[], ...props}) {

    const [currentSlide, setcurrentSlide] = useState(0)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            if (currentSlide < 2){
                setcurrentSlide(currentSlide + 1 )
            }else{
                setcurrentSlide(currentSlide === 0)
            }
        }, 5000)

        return ()=> clearTimeout(timer)

})

const fstclick =()=>{
    if(currentSlide !== 2){
        setcurrentSlide(currentSlide + 1 )
    }else(
        setcurrentSlide(currentSlide === 0)
    )
}

const secclick =()=>{
    if(currentSlide !== 0){
        setcurrentSlide(currentSlide - 1 )
    }else{
        setcurrentSlide(currentSlide === 2)
    }
}


  return (
    <Container {...props}>
        {
            images.map((images, index)=>(
                <Slide  style={{backgroundImage:`url(${images})`,
                marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
                }} key={index} >
                    {
                            currentSlide === 1?
                            <div className='gallery_subs'>
                                <div className='ban_writes'>
                                <p>Take the right step</p>
                                <h1>Open Account Now</h1>
                                <small>This is an opportunity for 
                                you to own an account with voom trust.
                                We give equal services and appreciate your 
                                money for you.
                                </small>
                                </div>
                                <div  onClick={secclick} className='back_arr'>
                                    <ArrowBackRounded/>
                                </div>
                                <div onClick={fstclick} className='forward_arr'>
                                    <ArrowForwardRounded/>
                                </div>
                            </div>
                            : null
                        }
                        {
                            currentSlide === 2?
                            <div className='gallery_subs'>
                                <div className='ban_writes'>
                                <p>2 years intarest</p>
                                <h1>Get your own loan</h1>
                                <small>This is one of our many 
                                services you get when you bank with voom</small>
                                <Link to='/loan' className='abt_link' >
                                    <p style={{backgroundColor:'white', color:'navy'}}>GET A LOAN</p>
                                </Link>
                                </div>
                                <div  onClick={secclick} className='back_arr'>
                                    <ArrowBackRounded/>
                                </div>
                                <div onClick={fstclick} className='forward_arr'>
                                    <ArrowForwardRounded/>
                                </div>
                            </div>
                            : null
                        }
                        {
                            currentSlide !== 0 && currentSlide !== 1 && currentSlide !== 2?
                            <div className='gallery_subs'>
                            <div className='ban_writes'>
                                <p>Do you have any need ?</p>
                                <h1>Get In Touch Now</h1>
                                <small>At voom trust bank our customers 
                                service is superb and we guide you through 
                                and ensure all your request and assistance 
                                is provided correctly.
                                <Link to='/contact' className='abt_link' >
                                    <p style={{backgroundColor:'white', color:'navy'}}>CONTACT US</p>
                                </Link>
                                </small>
                                </div>
                                <div  onClick={secclick} className='back_arr'>
                                    <ArrowBackRounded/>
                                </div>
                                <div onClick={fstclick} className='forward_arr'>
                                    <ArrowForwardRounded/>
                                </div>
                            </div>
                            : null
                        }
                </Slide>
            ))
        }
    </Container>
  )
}

export default Banner