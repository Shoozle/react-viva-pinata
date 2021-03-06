import { faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react"
import Dropdown from "./Dropdown";

function Pinata(pata, onPin) {

   const pinata = { ...pata.pinata }
   const appearReqs = Dropdown('Appear Requirements', pinata.appear)
   const visitReqs = Dropdown('Visit Requirements', pinata.visit)
   const residentReqs = Dropdown('Resident Requirements', pinata.resident)
   const romanceReqs = Dropdown('Romance Requirements', pinata.romance)
   const trickReqs = Dropdown('Trick Requirements', pinata.trick)
   const speciesReqs = Dropdown('Species Requirements', pinata.species)
   const usesReqs = Dropdown(`${pinata.name} Uses`, pinata.uses)

   useEffect(() => {
   }, []) 

   return (
      <div>
         <h3>{pinata.name} <a href="/"> <FontAwesomeIcon icon={faThumbTack}/> </a></h3>
         <div>
            {appearReqs}
            {visitReqs}
            {residentReqs}
            {romanceReqs}
            {trickReqs}
            {speciesReqs}
            {usesReqs}
         </div>
      </div>
   )
}

export default Pinata
