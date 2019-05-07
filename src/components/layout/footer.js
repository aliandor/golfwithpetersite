import React from 'react'
import styled from 'styled-components'
import Link  from 'gatsby-link'

let year = new Date();
let currentYear = year.getFullYear();

const Icons = {
  IG: 'https://res.cloudinary.com/dnsdvh13n/image/upload/v1548271051/GolfWithPeter/noun_instagram_2148034.svg',
  // FB: 'https://res.cloudinary.com/dnsdvh13n/image/upload/v1548271051/GolfWithPeter/noun_Facebook_2060938.svg',
  EM: 'https://res.cloudinary.com/dnsdvh13n/image/upload/v1548271053/GolfWithPeter/noun_Email_2146197.svg'
}

const Footer = () => {
  return (
    <Foot>
      <Info>
      <h1>Golf With Peter</h1>
      <h4>1456 E Mendocino St, Altadena, CA 91001</h4>
      <a href='tel:626-797-3821'>Altadena Golf Course -  626-797-3821</a>
      </Info>
      <IconWrapper>
        <a href='https://www.instagram.com/golfwithpeter/' target='_blank'>
          <img src={Icons.IG} />        
        </a>
        <Link to='/contactme'>
          <img src={Icons.EM} />
        </Link>
      </IconWrapper>
      <Legal>
        <div>
          <Copyright> &copy; {currentYear} golf with peter. All Rights Reserved</Copyright>
        </div>
        <div>
          <Links to='privacypolicy'>Privacy Policy</Links>
          <Links to='terms'>Terms & Conditions</Links>
        </div>
      </Legal>
    </Foot>
  )
}

export default Footer

const Links = styled(Link)`
  font-size: 0.5rem;
  padding-right: 5px;
  text-decoration: none;
  color: #fafafa;
`;

const Foot = styled.footer`
  position: relative;
  width: 100vw;
  height: 220px;
  background: #333;
  color: #FFF;
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  a {
    text-decoration: none;
    color: #fafafa;
  }
`;
const IconWrapper = styled.div`
  transform: translateY(-10px);
  width: 120px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  /* a:nth-child(1) {
    transform: translateY(3px);
  } */
  img {
    width: 28px;
  }
  @media(width: 320px) {
  transform: translateY(5px);
  img { width: 20px; }
  }
`;
const Legal = styled.div`
  width: 98%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  p{
    /* font-size: 0.55rem; */
    padding-right: 5px;
  }
  div {
    display: flex;
    p { 
      /* font-size: 0.5rem; */
    }
    @media(width: 320px) {
      p { font-size: 0.4rem; }
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.5rem;
`;