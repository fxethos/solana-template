import React from 'react'
import styled from 'styled-components'
import Gradient from "../assets/images/Gradient.png"
import { HOW, HEDGE, OUR } from "../components/Constants"
const LaunchPage = () => {
  return (
    <BackImg>
      <Img><img src={Gradient} alt="Gradient" /></Img>
      <TopText1>
        <TopText1Head>{HOW}
          <TopText1Para>{HEDGE}</TopText1Para>
        </TopText1Head>
        <NavBtn>
        <Button1 to="/">{OUR}</Button1>
      </NavBtn>
      </TopText1>
   </BackImg>
  )
}

export default LaunchPage
const BackImg = styled.div`
  position:relative;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  display:flex;
  height:100%;
  width:100%;
margin:5% 0;
`
const Img = styled.div`
  background-color:#000;
  opacity:0.4;
  filter: blur(2px);
  background-size: cover;
  text-align:center !important;
`
const TopText1 = styled.div`
  position : absolute;
  text-align: center;
  background-color:transparent;
  align-items:center;
  justify-content:center;
`
const TopText1Head = styled.div`
  font-family: Goldman;
  font-size: 25px;
  color: #E4F5FF;
  text-align: center;
  background-color:transparent;
  letter-spacing:2px;
`
const TopText1Para = styled.div`
  color: #8BEAFF !important;
  font-family: 'Manrope', sans-serif !important; 
  width:border-box !important;
  background-color:transparent;
  font-size:15px !important;
  padding:1rem;
`
const NavBtn = styled.div`
  
  text-align: center;
  background-color:transparent;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  font-family: 'Manrope', sans-serif;
 

`
const Button1 = styled.button
  `
  background-color: #8BEAFF;
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
  align-items:center;
  justify-content:center;
  font-family: 'Manrope', sans-serif;
&: hover{
  background:black;
  color:#8BEAFF;
  transform:translate(-2px);
}

`