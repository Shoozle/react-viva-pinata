import { useState } from "react"
import styled from "styled-components"
import Pinata from "../components/Pinata"

function Pinatas() {

   return (
      <Cards>
         <Pinata/>
      </Cards>
   )
}

const Cards = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(25rem, 30rem));
   gap: 2rem;
   margin: 2rem;
`

export default Pinatas

