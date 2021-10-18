import { Link } from "gatsby";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: transparent;
  height:100%;
  display:flex;
  font-size:1rem;
  font-family: 'Manrope', sans-serif;   
  position:sticky !important;
  top:0;
  z-index:999;
  width:100% !important;
  @media screen and (max-width:425px){
    transition:0.8s all ease;
  }
`
export const NavbarContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between !important;
  width:100% !important;
 `
export const NavLogo = styled(Link)`

  padding:2% ;
  justify-self:self-start;

`
export const MobileIcon = styled.div`
  display:none;
@media screen and (max-width:425px){
  display:block;
  position:absolute;
  top:0;
  right:0 ;
  transform:translate(-50%,60%);
  font-size:2rem;
  cursor:pointer;
  color: white !important;
}
`
export const NavMenu = styled.ul`
  display:flex;
  align-items:center;
  justify-content:center;
  list-style:none;
  text-align:center;

@media screen and (max-width:425px){
  flex-direction:column;
  width:100%;
  height:60vh;
  position:absolute;
  top:80px;
  top:${({ click }) => (click ? "100%" : "-1000px")};
  opacity:1;
  transition: all 0.2s ease;
  background:black;
}
`
export const NavItem = styled.li`
height:100%;
@media screen and (max-width:425px){
  width:100%;
}
`
export const NavLinks = styled(Link)`
  color:#8BEAFF;
  display:flex;
  text-decoration:none;
  align-items:center;
  justify-content:center;
  padding:2rem;
&:hover{
  color:white;
  transform:translate(-2px); 
}
@media screen and (max-width:425px){
  width:100%;
  align-items:center;
  justify-content:center;
  padding:0;
}
`
export const NavBtn = styled.div`
  display:block;
  align-items: center;
  margin-right:0.7rem !important;
  background-color:black;
  color: #8BEAFF;
  font-family: 'Manrope', sans-serif;
  background:${({ primary }) => (primary ? '#8BEAFF' : 'transparent')};
  padding:${({ big }) => (big ? '16px 40px' : '10px 32px')};
  font-size:${({ big }) => (big ? '20px' : '16px')};
  border:2px solid #8BEAFF;
  cursor:pointer;
  text-decoration:none;
  transition: 0.3s !important;
  border-radius:4px;
  font-family: 'Manrope', sans-serif;
&: hover{
  background:${({ primary }) => (primary ? 'transparent' : '#8BEAFF')};
  color:black;
  transform:translate(-2px);
}
 @media screen and (max-width:425px){
  margin-bottom:2rem;
 
}
`