import { useState } from "react"
import styled from "styled-components"
import Pinata from "../components/Pinata"
import { Pinatas as PinataData } from "../PinataData"

function Pinatas() {

   return (
      <Cards>
         {
            PinataData.map((pinata, index) => {
               return (
                  <Pinata
                     key={index}
                     pinata={pinata}
                  />
               )
            })
         }
      </Cards>
   )
}

const Cards = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
   gap: 2rem;
   margin: 2rem;
`

export default Pinatas

