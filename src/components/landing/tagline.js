import React from 'react'
import styled from 'styled-components';

const TagLine = () => {
  return (
    <Tagline>
      <div>
        <span>Learn</span>
        <span>Play</span>
        <span>Grow</span>
        <span>Golf</span>        
      </div>
      <p>With</p>
      <h1>Peter</h1>
    </Tagline>
  )
}

export default TagLine

const Tagline = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: center;
  transform: translateX(26px);
  /* width: 100%; */
  top: 20px;
  @media(width: 320px) {
    /* transform: translateX(26px); */
  }
  @media (min-width: 799px) {
    top: 0px;
  }
  @media(orientation: landscape) {
    top: 0px;
  }
  span {
    position: absolute;
    /* border: 1px solid; */
    width: 125px;
    text-align: end;
    bottom: 0;
    font-size: 3rem;
    font-family: sans-serif;
    transform: translateX(-65px) translateY(-50px);
    background: linear-gradient(to bottom right, #006234, 25%, #10B523);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;

    padding: 0 1px;
    opacity: 0;
    animation: animate 8s linear infinite;
  }
  @keyframes animate {
    0%  { opacity: 0; transform: translateX(-65px) translateY(-50px)  }
    3%  { opacity: 1; transform: translateX(-65px) translateY(-30px)  }
    5%  { opacity: 1; transform: translateX(-65px) translateY(-23px)  }
    15% { opacity: 1; transform: translateX(-65px) translateY(-23px)  }
    20% { opacity: 0; transform: translateX(-65px) translateY(-10px)  }
    35% { opacity: 0; transform: translateX(-65px) translateY(-10px)  }
  }
  span:nth-child(1) {
    /* learn */
    animation-delay: 0s;
    transform: translateX(-66px) translateY(-50px);
    animation: Learn 8s linear infinite;
    @keyframes Learn { 
      0%  { opacity: 0; transform: translateX(-66px) translateY(-50px) }
      3%  { opacity: 1; transform: translateX(-66px) translateY(-30px) }
      5%  { opacity: 1; transform: translateX(-66px) translateY(-23px) }
      15% { opacity: 1; transform: translateX(-66px) translateY(-23px) }
      20% { opacity: 0; transform: translateX(-66px) translateY(-10px) }
      35% { opacity: 0; transform: translateX(-66px) translateY(-10px) }
    }
  }
  span:nth-child(2) {
    /* play */
    animation-delay: 2s;
    letter-spacing: 2.25px;
    
  }
  span:nth-child(3) {
    /* grow */
    animation-delay: 4s;
  }
  span:nth-child(4) {
    /* golf */
    animation-delay: 6s;
    letter-spacing: 1.5px;
  }
  p {
    font-size: 1.5rem;
    font-family: sans-serif;
    letter-spacing: 3.25px;
    color: #333;
  }
  h1 {
    /* border: 1px solid; */
    transform: translateY(14px) translateX(-2px);
    font-family: sans-serif;
    font-size: 5rem;
    font-weight: 400;
    padding: 0;
    margin: 0;
    color: #333;
}
`;
