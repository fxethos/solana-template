import React from 'react'
import styled from "styled-components"
import background from "../assets/images/bg.jpg"
import { MANAGEMENT, STRATEGY, GREATER, GENERATING } from "../components/Constants"
const TreasuryPage = () => {
  return (
    <BackImg>
      <img src={background} alt="background" />
      <Text>
      <TopText1>
        <TopText1Head>{MANAGEMENT}
          <TopText1Para>{STRATEGY}</TopText1Para>
        </TopText1Head>
      </TopText1><br></br>
      <SecondText>
        <LeftText>{GREATER}</LeftText>
        <LeftText>{GENERATING}</LeftText>
      </SecondText>
      </Text>
    </BackImg>
  )
}

export default TreasuryPage
const BackImg = styled.div`
  position:relative;
  background-size: cover;
  justify-content:center;
  display:flex;
  height:100% !important;
  width:100%;
  @media screen and (max-width:425px){
    height:80vh !important;
  }
`
const Text = styled.div`
position : absolute;
background-color:transparent;
display:flex;
flex-direction:column !important;
justify-content:space-between !important;
align-items:center !important;
`
const TopText1 = styled.div`
  background-color:transparent;
  letter-spacing:1px;
  box-sizing:border-box;
  padding:20% 20%;
  @media screen and (max-width:768px){
    padding:10% 15%;
  }
  @media screen and (max-width:425px){
    padding:5% 1%;
    width:100%;
  }
`
const TopText1Head = styled.div`
  font-family: Goldman;
  font-size: 26px;
  color: #E4F5FF;
  text-align: left;
  text-shadow: 0px 0px 20px #0347F7 !important;
  box-shadow: 4px 4px 0px #8BEAFF;
  border:1px solid #696969;
  padding:1% ;
`
const TopText1Para = styled.div`
  color: #E4F5FF;
  font-family: 'Manrope', sans-serif !important; 
  font-size:17px ;
  line-height: 22.32px;
  padding:2% 0;
  text-shadow: 0px 0px 0px black !important;
`
const SecondText = styled.div`
  position : absolute;
  background-color:transparent;
  display:flex;
  flex-direction:row;
  align-items:center !important;
  justify-content:space-between !important;
  letter-spacing:1px;
  box-sizing:border-box;
  flex:0.5 !important;
padding:34% 20%;
@media screen and (max-width:768px){
  padding:30% 15%;
}
@media screen and (max-width:425px){
  padding:45% 1%;
  width:100%;
}
@media screen and (max-width:375px){
  padding:60% 1%;
  width:100%;
}
@media screen and (max-width:320px){
  padding:70% 1%;
  width:100%;
}
`
const LeftText = styled.div`
  display:flex;
  font-family: Goldman;
  font-size: 15.5px;
  color: #E4F5FF;
  letter-spacing:2px;
  border:1px solid #696969;
  box-shadow: 4px 4px 0px #8BEAFF;
  padding:1%;
  text-align: left;
  background-color:black;
  width:48%;
  text-transform: uppercase;

@media screen and (max-width:425px){
  width:50%;
  letter-spacing:1px;
  font-size: 13.5px;
}

`


