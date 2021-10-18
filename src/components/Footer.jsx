import React from 'react'
import styled from 'styled-components'
import Telegram from "../images/Telegram.png"
import Twitter from "../images/Twitter.png"
import Github from "../images/Github.png"
import Medium from "../images/Medium.png"
import Discord from "../images/Discord.png"
import { FOOTER } from "../components/Constants"
const Footer = () => {
  return (
    <Footers>
      <Footer1>{FOOTER}</Footer1>
      <Footer2>
        <span><img src={Twitter} alt="Twitter" /> </span>
        <span><img src={Github} alt="Github" /> </span>
        <span><img src={Telegram} alt="Telegram" /> </span>
        <span><img src={Discord} alt="Discord" /> </span>
        <span><img src={Medium} alt="Medium" /> </span>
      </Footer2>
    </Footers>
  )
}

export default Footer
const Footers = styled.div`
  text-align: center;
  background-color:transparent;
  justify-content:center;
  height:100%;
  width:100%;
  bottom:0 !important;
  letter-spacing:1rem;
  font-size:15px;
  color: #8BEAFF !important;
  font-family: 'Manrope', sans-serif;
`
const Footer1 = styled.div`
  
letter-spacing:1px
  
`
const Footer2 = styled.div`

margin-top:1%;
 

`