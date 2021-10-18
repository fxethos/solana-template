import React from 'react'
import styled from 'styled-components'
import Joystick from "../images/Joystick.png"
import { OPTIONS, INCREASE } from "../components/Constants"
const AirdropPage = () => {
  return (
    <PageContainer>
      <PageContainertext>
        {OPTIONS}
        <PageContainertextpara>
          {INCREASE}
        </ PageContainertextpara>
      </PageContainertext>
      <PageContainerimg>
        <img src={Joystick} alt="Joystick" />
      </PageContainerimg>
    </PageContainer>
  )

}

export default AirdropPage

const PageContainer = styled.div`
display:flex;
justify-content: center !important;
align-items: center !important;
height:100%;
flex-direction:row;
width:100%;
padding:5%;
@media screen and (max-width:768px){
  width:100%;
  text-align:justify;
  flex-direction:column;
 }

`


const PageContainertextpara = styled.div`
color: #8BEAFF !important;
font-family: 'Manrope', sans-serif !important;
line-height: 22.32px;
font-size:15px;
letter-spacing:1px;

`
const PageContainertext = styled.div`

font-size: 25px;
line-height: 200%;
color: #E4F5FF;
text-shadow: 0px 0px 20px #0347F7;
font-family:Goldman,cursive;
letter-spacing:2px;
flex:0.4 !important ;
justify-content:center;
align-items:center;
`
const PageContainerimg = styled.div`
display:flex;
width:100%;
height:100%;
flex:0.4 !important ;
justify-content:center;
align-items:center;
`


