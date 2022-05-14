import { useEffect, useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Pinata(pata) {

   const pinata = { ...pata.pinata }

   const [appear, setAppear] = useState(true);
   const [visit, setVisit] = useState(false);
   const [resident, setResident] = useState(false);
   const [romance, setRomance] = useState(false);
   const [trick, setTrick] = useState(false);
   const [species, setSpecies] = useState(false);
   // const [wildcard, setWildcard] = useState(false);
   const [uses, setUses] = useState(true);
   const [masterRomancer, setMasterRomancer] = useState(() => {
      const saved = localStorage.getItem(`${pinata.name}`);
      const initValue = JSON.parse(saved);
      return initValue || false;
   })

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
            <h4 onClick={() => { setAppear(!appear) }} >Appear Requirements <span><FontAwesomeIcon icon={faArrowDown} /></span> </h4>
            <ul className={appear ? 'visible' : 'invisible'}>
               {pinata.appear.map((appear, index) => (<li key={index}>{appear}</li>))}
            </ul>
            <h4 onClick={() => { setVisit(!visit) }}>Visit Requirements <span><FontAwesomeIcon icon={faArrowDown} /></span> </h4>
            <ul className={visit ? 'visible' : 'invisible'}>
               {pinata.visit.map((visit, index) => (<li key={index}>{visit}</li>))}
            </ul>
            <h4 onClick={() => { setResident(!resident) }}>Resident Requirements <span><FontAwesomeIcon icon={faArrowDown} /></span> </h4>
            <ul className={resident ? 'visible' : 'invisible'}>
               {pinata.resident.map((resident, index) => (<li key={index}>{resident}</li>))}
            </ul>
            <h4 onClick={() => { setRomance(!romance) }}>Romance Requirements <span><FontAwesomeIcon icon={faArrowDown} /></span> </h4>
            <ul className={romance ? 'visible' : 'invisible'}>
               {pinata.romance.map((romance, index) => (<li key={index}>{romance}</li>))}
            </ul>
            <h4 onClick={() => { setTrick(!trick) }}>Trick Requirements <span><FontAwesomeIcon icon={faArrowDown} /></span> </h4>
            <ul className={trick ? 'visible' : 'invisible'}>
               {pinata.trick.map((trick, index) => (<li key={index}>{trick}</li>))}
            </ul>
            <h4 onClick={() => { setSpecies(!species) }}>Species + Color Variants <span><FontAwesomeIcon icon={faArrowDown} /></span> </h4>
            <ul className={species ? 'visible' : 'invisible'}>
               {pinata.species.map((species, index) => (<li key={index}>{species}</li>))}
            </ul>
            {/* <h4 onClick={() => { setWildcard(!wildcard) }}>Wildcard Versions</h4>
            <ul className={wildcard ? 'visible' : 'invisible'}>
               <li>Bumps</li>
               <li>Ears</li>
               <li>Three Horns</li>
            </ul> */}
            <h4 onClick={() => { setUses(!uses) }}>Fudgehog Uses <span><FontAwesomeIcon icon={faArrowDown} /></span> </h4>
            <ul className={uses ? 'visible' : 'invisible'}>
               {pinata.uses.map((uses, index) => (<li key={index}>{uses}</li>))}
            </ul>
            <form>
               <div>
                  <label htmlFor={pinata.name}>Master Romancer</label>
                  <input onChange={romanceHandler} defaultChecked={masterRomancer} type="checkbox" name={pinata.name} id={pinata.name} /> : 
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

