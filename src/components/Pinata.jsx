import { useEffect, useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useDropdown } from "../hooks/useDropdown";


function Pinata(pata) {

   const pinata = { ...pata.pinata }
   // const [wildcard, setWildcard] = useState(false);
   const [uses, setUses] = useState(false);
   const [masterRomancer, setMasterRomancer] = useState(() => {
      const saved = localStorage.getItem(`${pinata.name}`);
      const initValue = JSON.parse(saved);
      return initValue || false;
   })

   const appearReqs = useDropdown('Appear', pinata.appear)
   const visitReqs = useDropdown('Visit', pinata.visit)
   const residentReqs = useDropdown('Resident', pinata.resident)
   const romanceReqs = useDropdown('Romance', pinata.romance)
   const trickReqs = useDropdown('Trick', pinata.trick)
   const speciesReqs = useDropdown('Species', pinata.species)
   const usesReqs = useDropdown('Uses', pinata.uses)

   const romanceHandler = () => {
      setMasterRomancer(!masterRomancer);
   }

   useEffect(() => {
      // setMasterRomancer(JSON.parse(localStorage.getItem(`${pinata.name}`)))
      localStorage.setItem(`${pinata.name}`, JSON.stringify(masterRomancer))
   }, [masterRomancer]) 

   return (
      <Card>
         <h3>{pinata.name}</h3>
         <div>
            {appearReqs}
            {visitReqs}
            {residentReqs}
            {romanceReqs}
            {trickReqs}
            {speciesReqs}
            {/* <h4 onClick={() => { setWildcard(!wildcard) }}>Wildcard Versions</h4>
            <ul className={wildcard ? 'visible' : 'invisible'}>
               <li>Bumps</li>
               <li>Ears</li>
               <li>Three Horns</li>
            </ul> */}
            <h4 onClick={() => { setUses(!uses) }}>{pinata.name} Uses <span><FontAwesomeIcon icon={uses ? faMinus : faPlus} /></span> </h4>
            <ul className={uses ? 'visible' : 'invisible'}>
               {pinata.uses.map((uses, index) => (<li dangerouslySetInnerHTML={{__html: uses}} key={index}></li>))}
            </ul>
            <form>
               <div>
                  <label htmlFor={pinata.name}>Master Romancer</label>
                  <input onChange={romanceHandler} defaultChecked={masterRomancer} type="checkbox" name={pinata.name} id={pinata.name} /> 
               </div>
            </form>
         </div>
      </Card>
   )
}

export default Pinata

const Card = styled.div`
   display: flex;
   flex-direction: column;
   background: rgb(55,216,218);
   background: linear-gradient(135deg, #82ccfe 0%, #78c8ff 100%);
   max-height: 30rem;
   overflow: scroll;
   overflow-x: hidden;
   position: relative;
   font-family: 'Roboto', sans-serif;
   &::-webkit-scrollbar {
      width: 10px;
   }
   &::-webkit-scrollbar-track {
      background-color: lightgreen;
   }
   &::-webkit-scrollbar-thumb {
      background-color: darkcyan;
   }
   h3 {
      font-size: 1.6rem;
      padding: .4rem 1rem;
      font-weight: 400;
      position: sticky;
      top: 0;
      background-color: #6eb0de;
   }
   div {
      padding-bottom: 1rem;
   }
   h4 {
      display: flex;
      justify-content: space-between;
      cursor: pointer; 
      font-size: 1.2rem;
      font-weight: 400;
      padding: .3rem 1rem;
      border-top: 1px solid #78c8ff;
      border-bottom: 1px solid #82ccfe;
      background-color: #6eb0de;
      :hover{
         background-color: #66a7d4;
      }
      span {
         font-size: 1rem;
         align-self: center;
         /* border-radius: 50%;
         background-color: lightblue;
         padding: .2rem;
         margin-left: 2rem; */
      }
   }
   h4::selection {
      background-color: transparent;
   }
   ul {
      transition: all .3s ease;
      overflow:hidden;
      padding-left: 1.2rem;
      font-size: 1rem;
      line-height: 1.6rem;
      li {
         font-family: 'Roboto', sans-serif;
         font-weight: 300;
         padding-right: 1.2rem;
      }
      li::selection{
         background-color: lightgreen;
      }
   }
   ul.visible {
      height: auto;
      opacity: 1;
   }
   ul.invisible {
      height: 0;
      opacity: 0;
      color: red;
   }
   form {
      padding: .4rem 1rem;
      div {
         input {
            margin-left: 1rem;
         }
      }
   }
`

