import React from 'react'
import styled from "styled-components"
import background from "../images/Background.png"
import cube from "../images/cube.png"
import { SOLANA, LIMITLESS, PSYOPTIONS, PROVIDING } from "../components/Constants"
const BlockChainPage = () => {
  return (
    <Backgroundimg><img src={background} alt="background" />
      <Content>
        <Lefttext>
          <Lefttexttitle>
            <img src={cube} alt="cube" /><br></br>
            {SOLANA}
          </Lefttexttitle>
        </Lefttext>
        <Righttext>
          <Righttext1head>{LIMITLESS}
            <Righttext1para>{PSYOPTIONS}</Righttext1para>
          </Righttext1head>
          <Righttext2para>{PROVIDING}</Righttext2para>
        </Righttext>
      </Content>
     
    </Backgroundimg>
  )
}

export default BlockChainPage

const Backgroundimg = styled.div`
background-size: cover !important;
background-repeat:no-repeat;
background-position:center !important;
justify-content:center !important;
position: relative;
height:100vh;
width:100%;
display:flex;
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


const Lefttext = styled.div`
  width:100% ;
  height:100%;
  display:flex;
  flex:0.5!important;
  justify-content:center !important;
  align-items:center !important;
  background-color:transparent !important;
  text-align: right;
  flex-direction:column;
@media screen and (max-width:2560px){
    padding:20% 15% ;
}
  @media screen and (max-width:1440px){
    padding:12% 10% 12% 22%;
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

const Lefttexttitle = styled.div`
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
const Righttext = styled.div`
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
    padding:5% 20% 5% 0;
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

const Righttext1head = styled.div`
  font-family: Goldman;
  font-size: 25px;
  color: #E4F5FF;
  padding:3%;
  text-align: left;
  background-color:#05044D;
  letter-spacing:1px;
  box-shadow: 3px -3px 0px #DD3E76, -5px 5px 0px #1D4DC9;
`
const Righttext2para = styled.div`
  font-family: 'Manrope', sans-serif;
  color: #E4F5FF;
  padding:3%;
  text-align: left;
  background-color:#05044D;
  line-height: 22.32px;
  letter-spacing:1px;
  font-size: 18px;
  box-shadow: 3px -3px 0px #DD3E76, -5px 5px 0px #1D4DC9;
  margin-top:5%;
  `
const Righttext1para = styled.div`
  color: #E4F5FF;
  font-family: 'Manrope', sans-serif ; 
  background-color:#05044D;
  line-height: 22.32px;
  font-size: 18px;
  letter-spacing:1px;
  text-align: left;
`


