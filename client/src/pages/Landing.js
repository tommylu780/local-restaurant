import React from 'react';
import styled from 'styled-components';
// import Navbar from '../components/Navbar';
import ImgH from '../assets/hero.jpg';

const Landing = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Shop is open</HeroH1>
                    <HeroP>Welcome</HeroP>
                    <HeroBtn>Order now</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)),
    url(${ImgH});
    height: 100vh;
    background-position: center;
    background-size: cover;
`;
const HeroContent = styled.div`
    height: calc(100vh -80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw - 1330px)/2);
`;
const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: 1;
    font-weight: bold;

    @media screen and (max-width: 650px){
        width: 100%;
    }
`;

const HeroH1 = styled.div`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 3px 5px #e9ba23;
    letter-spacing: 3px;
    
    @media screen and (max-width: 425px){
        font-size: clamp(2rem, 5vw, 3rem);
        letter-spacing: 1.5px;
    }
`;

const HeroP = styled.div`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;

    @media screen and (max-width: 425px){
        font-size: clamp(1.5rem, 4vw, 2rem);
        letter-spacing: 1.5px;
    }
`;

const HeroBtn = styled.div`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2 ease-out;

    &:hover {
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }

    @media screen and (max-width: 425px){
        font-size: 1rem;
    }
`;


export default Landing

