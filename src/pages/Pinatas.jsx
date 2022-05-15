import { useReducer } from "react"
import styled from "styled-components"
import Pinata from "../components/Pinata"
import { Card } from "../Styles"
import { initialPinatas } from "../pinataData"

const pinataReducer = (state, action) => {
   switch (action.type) {
      case "MASTER_ROMANCER":
         return state.map((pinata) => {
            if (pinata.id === action.id) {
               localStorage.setItem(`${pinata.name} master romancer`, JSON.stringify(!pinata.masterRomancer))
               return { ...pinata, masterRomancer: !pinata.masterRomancer }
            } else {
               return pinata;
            }
         })
      default:
         return state;
   }
}

function Pinatas() {

   const [pinatas, dispatch] = useReducer(pinataReducer, initialPinatas);

   const handleMasterRomancer = (pinata) => {
      dispatch({ type: "MASTER_ROMANCER", id: pinata.id })
      
   }

   return (
      <Cards>
         {
            pinatas.map((pinata) => (
               <Card key={pinata.id}>
                  <Pinata
                     pinata={pinata}
                  />
                  <form>
                     <label htmlFor={pinata.name}>Master Romancer</label>
                     <input
                        onChange={() => handleMasterRomancer(pinata)}
                        checked={pinata.masterRomancer}
                        type="checkbox"
                        name={pinata.name}
                        id={pinata.name}
                     />
                  </form>
               </Card>
            ))
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

