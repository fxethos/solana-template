import { Link } from "gatsby";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: black;
  height:100%;
  display:flex;
  font-size:1rem;
  font-family: 'Manrope', sans-serif;   
  position:sticky !important;
  top:0;
  z-index:999;
  width:100% !important;
  margin-right:0px !important;
  display:flex;
  align-items:center;
  width:100% !important;
  margin-right:0px !important;
  @media screen and (max-width:425px){
    transition:0.8s all ease;
  }
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
  list-style:none;
  text-align:center;
  align-items:center;
  justify-content:center !important;
  width:100% !important;
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
export const NavList = styled.div `
width:100%;
display:flex;
@media screen and (max-width:425px){
  flex-direction:column !important;
  justify-content:space-between !important;
}
`
export const NavItem = styled.li`
height:100%;
justify-content:flex-start !important;
@media screen and (max-width:425px){
  width:100%;
  padding:1.5rem 0;
}
`
export const NavLinks = styled(Link)`
  color:#8BEAFF;
  display:flex;
  text-decoration:none;
  align-items:center;
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
 display:flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 width: 10em;
  margin-right:1rem !important;
  background-color:black;
  color: #8BEAFF;
  font-family: 'Manrope', sans-serif;
  background:${({ primary }) => (primary ? '#8BEAFF' : 'black')};
  padding: 1%;
  font-size:16px;
  border:2px solid #8BEAFF;
  cursor:pointer;
  text-decoration:none;
  transition: 0.3s !important;
  border-radius:4px;
  font-family: 'Manrope', sans-serif;
  box-sizing: border-box;
&: hover{
  background:${({ primary }) => (primary ? 'black' : '#8BEAFF')};
  color:black;
  transform:translate(-2px);
}
 @media screen and (max-width:425px){
  margin-bottom:2rem;
  margin-right:0rem !important;
 
}
`