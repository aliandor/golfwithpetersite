import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Headline from '../brand'

const MenuIcon =
  'https://res.cloudinary.com/dnsdvh13n/image/upload/v1548271054/GolfWithPeter/noun_menu_2126968.svg'
const EM =
  'https://res.cloudinary.com/dnsdvh13n/image/upload/v1548271053/GolfWithPeter/noun_Email_2146197.svg'

class Header extends Component {
  state = {
    toggle: false,
  }

  handleClick = () => {
    this.setState({
      toggle: !this.state.toggle,
    })
  }

  render() {
    return (
      <Nav>
        <Btn onClick={this.handleClick} src={MenuIcon} alt="menu icon" />
        {this.state.toggle && (
          // mobile menu
          <Menu>
            <Links to="/">Home</Links>
            <Links to="/contactme">Contact Me</Links>
            <Links to="/protips">Pro Tips</Links>
            <Links to="/profile">About Me</Links>
            <Links to="/form">Book Now</Links>
            <button onClick={this.handleClick} />
          </Menu>
        )}
        <Logo>
          <Links to="/">
            <Headline text="Golf" />
          </Links>
        </Logo>
        <Links to="/contactme">
          <Contact src={EM} alt="quick contact icon" />
        </Links>
        <Navigation>
          <Links to="/">Home</Links>
          <Links to="/contactme">Contact Me</Links>
          <Links to="/protips">Pro Tips</Links>
          <Links to="/profile">About Me</Links>
          <Links to="/form">Book Now</Links>
        </Navigation>
      </Nav>
    )
  }
}

export default Header

const Menu = styled.nav`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 60px);
  grid-auto-rows: 1fr;
  grid-row-gap: 1rem;
  background: #fafafa;
  width: 100vw;
  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.125);
  height: 55vh;
  top: 50px;
  left: 0;
  right: 0;
  z-index: 3;
  button {
    background: none;
    height: 45vh;
    border: none;
    outline: none;
    opacity: 0;
    cursor: pointer;
  }
  @media (orientation: landscape) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 100vh;
  }
  @media (min-width: 999px) {
    display: none;
  }
`

const Links = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  list-style: none;
  font-size: 2rem;
  font-weight: 400;
  @media (min-width: 999px) {
    font-size: 1rem;
  }
  &:nth-child(5) {
    font-weight: 400;
    color: #10b523;
    background: #fafafa;
    @media (orientation: landscape) {
      /* transform: translateX(50%) translateY(-30px); */
    }
  }
`

const Nav = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  background: #fafafa;
  padding: 0px 16px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.125);
`

const Btn = styled.img`
  width: 32px;
  cursor: pointer;
  @media (min-width: 999px) {
    display: none;
  }
`

const Contact = styled.img`
  width: 32px;
  @media (min-width: 999px) {
    display: none;
  }
`
const Logo = styled.div`
  @media (min-width: 999px) {
    align-self: flex-start;
    transform: translateX(-40px) translateY(-12px);
  }
`

const Navigation = styled.nav`
  display: none;
  height: 100%;
  width: 380px;
  @media (min-width: 999px) {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    li {
      list-style: none;
    }
  }
  @media (orientation: landscape) {
  }
`
