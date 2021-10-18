import React from 'react'
import styled from "styled-components"
import background from "../assets/images/Background.png"
import cube from "../assets/images/cube.png"
import { SOLANA, LIMITLESS, PSYOPTIONS, PROVIDING } from "../components/Constants"
const BlockChainPage = () => {
  return (
    <BackgroundImg><img src={background} alt="background" />
      <Content>
        <LeftText>
          <LeftTextTitle>
            <img src={cube} alt="cube" /><br></br>
            {SOLANA}
          </LeftTextTitle>
        </LeftText>
        <RightText>
          <RightText1Head>{LIMITLESS}
            <RightText1Para>{PSYOPTIONS}</RightText1Para>
          </RightText1Head>
          <RightText2Para>{PROVIDING}</RightText2Para>
        </RightText>
      </Content>
    </BackgroundImg>
  )
}

export default BlockChainPage

const BackgroundImg = styled.div`
background-size: cover !important;
background-repeat:no-repeat;
background-position:center !important;
justify-content:center !important;
position: relative;
height:100vh;
width:100%;
display:flex;

@media screen and (max-width:1280px) and (min-height:800px){
  height:50vh;
}
@media screen and (max-width:1024px) and (min-height:1366px){
  height:50vh;
}
@media screen and (max-width:768px) and (min-height:1024px){
  height:50vh;
}
@media screen and (max-width:425px){
  height:100vh !important;
  }
  @media screen and (max-width:375px){
    height:120vh !important;

}
`
const Content = styled.div`
display:flex;
position: absolute;
top: 5%;
background-color:transparent !important;
flex-direction:row;
justify-content:center !important;
align-items:center !important;
@media screen and (max-width:425px){
  top: 0%;
  flex-direction:column !important;
  height:100% !important;
  }
`


const LeftText = styled.div`
  width:100% ;
  height:100%;
  display:flex;
  flex:0.5!important;
  justify-content:center !important;
  align-items:center !important;
  background-color:transparent !important;
  text-align: right;
  flex-direction:column;

@media screen and (min-width:2560px){
  padding:20% 15% ;
}
@media screen and (max-width:1440px) and (min-height:845px){
    padding:15% 5% 15% 16% !important;
}
@media screen and (max-width:1440px){
  padding:12% 5% 12% 16%;
}
@media screen and (max-width:1024px){
        padding:12% 5% ;
  }
@media screen and (max-width:768px){
        padding:12% 5% ;
}
@media screen and (max-width:425px){
  padding:2% 20% 2% 25%;
  flex:1!important;
  height:100% !important;
}
`

const LeftTextTitle = styled.div`
  font-size:30px;
  color: #E4F5FF;
  text-shadow: 0px 0px 20px #0347F7;
  background-color:transparent !important;
  font-family:Goldman,cursive;
  letter-spacing:2px;
  line-height: 38px;
width:100%;
height:100%;
@media screen and (max-width:425px){
  width:100%;
  font-size:20px;
  line-height: 22px;
  height:100% !important;
}
 
`
const RightText = styled.div`
  width:100% ;
  height:100%;
  display:flex;
  flex:0.5 !important;
  justify-content:center;
  align-items:center;
  background-color:transparent;
  text-align: right;
  flex-direction:column;
  @media screen and (max-width:2560px){
    padding:15% 15% ;
    }
  @media screen and (max-width:1440px){
    padding:5% 18% 5% 2%;
  }
  @media screen and (max-width:1024px){
    padding:8% 1% ;
    height:100% !important;
  }
  @media screen and (max-width:768px){
    padding:3% 0% !important ;
    height:100% !important;
  }
  @media screen and (max-width:425px){
    padding:1% !important;
    flex:1!important;
    height:100% !important;
  }
`

const RightText1Head = styled.div`
  font-family: Goldman;
  font-size: 25px;
  color: #E4F5FF;
  padding:4%;
  text-align: left;
  background-color:#05044D;
  letter-spacing:1px;
  box-shadow: 3px -3px 0px #DD3E76, -5px 5px 0px #1D4DC9;
`
const RightText2Para = styled.div`
  font-family: 'Manrope', sans-serif;
  color: #E4F5FF;
  padding:4%;
  text-align: left;
  background-color:#05044D;
  line-height: 22.32px;
  letter-spacing:1px;
  font-size: 15px;
  box-shadow: 3px -3px 0px #DD3E76, -5px 5px 0px #1D4DC9;
  margin-top:5%;
  `
const RightText1Para = styled.div`
  color: #E4F5FF;
  font-family: 'Manrope', sans-serif ; 
  background-color:#05044D;
  line-height: 22.32px;
  font-size: 15px;
  letter-spacing:1px;
  text-align: left;
`


