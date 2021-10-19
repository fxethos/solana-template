import React from 'react'
import styled from "styled-components"
import RetroLogo from "../assets/images/Retro logo.png"
import { AMERICAN, TRADE, START, READ } from "../components/Constants"
const Home = () => {
  return (
    <HomeContainer>
      <HomeContainerText>
        <h1>{AMERICAN}</h1>
        <HomeContainerTextPara>
          <div>{TRADE}</div>
        </HomeContainerTextPara>
        <div>
          <span>
            <NavBtn>
              <Button1 to="/">{START}</Button1>
              <Button2 to="/">{READ}</Button2>
            </NavBtn>
          </span>
        </div>
      </HomeContainerText>
      <HomeContainerImg>
        <img src={RetroLogo} alt="retrologo" />
      </HomeContainerImg>
    </HomeContainer>
  )
}

export default Home
const HomeContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height:100%;
  width:100% !important;
  flex-direction:row;
  padding:5% ;
@media screen and (max-width:768px){
  flex-direction:column;
  display:block;
 }

`
const HomeContainerTextPara = styled.div`
  justify-content: center,
  align-items: center,
  color: #E4F5FF;
  font-family: 'Manrope', sans-serif;
  line-height: 27.32px;
  font-size:20px;
  padding:2rem 0;
  letter-spacing:1px;
@media screen and (max-width:425px){
  width:100%;
  font-size:15px;
 }
`
const HomeContainerText = styled.div`
  align-items:center;
  font-size: 32px;
  line-height: 200%;
  color: #E4F5FF;
  text-shadow: 0px 0px 20px #0347F7;
  font-family:Goldman,cursive;
  letter-spacing:5px;
   flex:0.5;
   justify-content:center;
@media screen and (max-width:425px){
  width:100%;
  font-size: 18px;
}
 `

const HomeContainerImg = styled.div`
  width:100% ;
  height:100%;
  display:flex;
  flex:0.5;
  justify-content:center;
  align-items:center;
  `
const NavBtn = styled.div`
  cursor:pointer;
  font-family: 'Manrope', sans-serif;

`
const Button1 = styled.button
  `
  background-color: #8BEAFF;
  white-space:wrap;
  padding:${({ big }) => (big ? '8px 10px' : '10px 12px')};
  color:black;
  font-size:${({ big }) => (big ? '20px' : '16px')};
  outline:none;
  border:2px solid #8BEAFF;
  min-width:100px;
  cursor:pointer;
  text-decoration:none;
  transition: 0.3s !important;
  border-radius:4px;
  font-family: 'Manrope', sans-serif;
&: hover{
  background:black;
  color:#8BEAFF;
  transform:translate(-2px);
}
`

const Button2 = styled.button
  `
  background:${({ primary }) => (primary ? '#8BEAFF' : 'transparent')};
  white-space:wrap;
  padding:${({ big }) => (big ? '8px 10px' : '10px 12px')};
  color:#8BEAFF;
  font-size:${({ big }) => (big ? '20px' : '16px')};
  outline:none;
  border:2px solid #8BEAFF;
  min-width:100px;
  cursor:pointer;
  text-decoration:none;
  transition: 0.3s !important;
  border-radius:4px;
  font-family: 'Manrope', sans-serif;
  margin-left:20px;
&: hover{
  background:${({ primary }) => (primary ? 'transparent' : '#8BEAFF')};
  color:black;
  transform:translate(-2px);
}
`


