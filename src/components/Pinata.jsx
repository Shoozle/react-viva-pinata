import { useState } from "react"
import styled from "styled-components"

function Pinata() {

   const [appear, setAppear] = useState(true);
   const [visit, setVisit] = useState(false);
   const [resident, setResident] = useState(false);
   const [romance, setRomance] = useState(false);
   const [trick, setTrick] = useState(false);
   const [variants, setVariants] = useState(false);
   const [wildcard, setWildcard] = useState(false);
   const [uses, setUses] = useState(true);


   return (
      <Card>
         <h3>Fudgehog</h3>
         <h4 onClick={() => {setAppear(!appear)}} >Appear Requirements</h4>
         <ul className={appear ? 'visible' : 'invisible'}>
            <li>Have 1 Holly bush in the garden</li>
         </ul>
         <h4 onClick={() => {setVisit(!visit)}}>Visit Requirements</h4>
         <ul className={visit ? 'visible' : 'invisible'}>
            <li>Have 1 Holly bush in the garden</li>
            <li>Have 1 Thistle in the garden</li>
         </ul>
         <h4 onClick={() => {setResident(!resident)}}>Resident Requirements</h4>
         <ul className={resident ? 'visible' : 'invisible'}>
            <li>Has eaten 1 Holly berry</li>
            <li>Has eaten 1 Thistle</li>
            <li>Have 1 Leaf Pile in the garden</li>
         </ul>
         <h4 onClick={() => {setRomance(!romance)}}>Romance Requirements</h4>
         <ul className={romance ? 'visible' : 'invisible'}>
            <li>Has drunk a bottle of milk</li>
            <li>Has eaten a loaf of bread</li>
            <li>There is a Fudgehog house in the garden</li>
         </ul>
         <h4 onClick={() => {setTrick(!trick)}}>Trick Requirements</h4>
         <ul className={trick ? 'visible' : 'invisible'}>
            <li>Feed it a Garlic seed to have it perform Trick 1</li>
            <li>Feed it a Bulb of Garlic to have it perform Trick 2</li>
         </ul>
         <h4 onClick={() => {setVariants(!variants)}}>Species + Color Variants</h4>
         <ul className={variants ? 'visible' : 'invisible'}>
            <li>Feeding a coconut to a Fudgehog turns it into a Parmadillo </li>
            <li>Feeding it a bluebell seed changes its color to blue</li>
            <li>Feeding it poison ivy changes its color to green</li>
            <li>Feeding it a chili changes its color to red</li>
         </ul>
         <h4 onClick={() => {setWildcard(!wildcard)}}>Wildcard Versions</h4>
         <ul className={wildcard ? 'visible' : 'invisible'}>
            <li>Bumps</li>
            <li>Ears</li>
            <li>Three Horns</li>
         </ul>
         <h4 onClick={() => {setUses(!uses)}}>Fudgehog Uses</h4>
         <ul className={uses ? 'visible' : 'invisible'}>
            <li>Feed a Fudgehog to a Badgesicle to teach it trick 1</li>
         </ul>
      </Card>
   )
}

export default Pinata

const Card = styled.div`
   display: flex;
   flex-direction: column;
   background: rgb(55,216,218);
   background: linear-gradient(157deg, rgba(55,216,218,1) 0%, rgba(45,168,253,1) 100%);
   border-radius: 1rem;
   padding: 0.6rem 1rem;
   ul {
      transition: all .4s ease;
      overflow:hidden;
   }
   ul.visible {
      height: auto;
      opacity: 1;
   }
   ul.invisible {
      height: 0;
      opacity: 0;
   }
`

