import { useReducer } from "react"
import Pinata from "../components/Pinata"
import { Card, Cards } from "../Styles"
import { initialPinatas } from "../pinataData"
import { pinataReducer } from "../reducers/pinnedReducer"

function Pinatas() {

   const [pinatas, dispatch] = useReducer(pinataReducer, initialPinatas);

   const handleMasterRomancer = (pinata) => {
      dispatch({ type: "MASTER_ROMANCER", name: pinata.name })   
   }
   
   const handlePinned = (pinata) => {
      console.log('YOU TOUCHED ME')
      dispatch({ type: "PINNED", name: pinata.name })   
   }

   return (
      <Cards>
         {
            pinatas.map((pinata) => (
               <Card key={pinata.name}>
                  <Pinata
                     pinata={pinata}
                     onpin={() => {handlePinned(pinata)}}
                  />
                  <form>
                     <label htmlFor={pinata.name}>Master Romancer</label>
                     <input
                        onChange={() => handleMasterRomancer(pinata)}
                        checked={pinata.masterRomancer}
                        type="checkbox"
                        name={pinata.name}
                     />
                  </form>
               </Card>
            ))
         }
      </Cards>
   )
}
export default Pinatas

