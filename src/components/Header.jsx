import * as React from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import companyLogo from "../assets/images/logo.png"
import { useEffect, useState } from "react"
import { IconContext } from "react-icons/lib"
import { MobileIcon, Nav, NavList, NavItem, NavLinks, NavLogo, NavMenu, NavBtn } from "./NavbarElements"
import { MARKETS, PORTFOLIO, FAUCETS, DOCS, LAUNCHAPP } from "../components/Constants"
const Header = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    }
    else {
      setScroll(false)
    }
  }
  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])
  return (
    <>
      <IconContext.Provider value={{ color: "#FFFFFF" }}>
        <Nav active={scroll} click={click}  >
          <NavLogo to="/" onClick={closeMobileMenu}>
            <img src={companyLogo} alt="logo" />
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavList>
              <NavItem>
                <NavLinks to="/">{MARKETS}</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">{PORTFOLIO}</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">{FAUCETS}</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">{DOCS}</NavLinks>
              </NavItem>
            </NavList>
            <NavBtn>
              {LAUNCHAPP}
            </NavBtn>
          </NavMenu>
        </Nav>
      </IconContext.Provider >
    </>
  )
}
export default Header
