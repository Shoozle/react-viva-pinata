import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


function useDropdown(title, listItems) {

   const [show, setShow] = useState(false)
   let dropdownBlock = (
      <>
         <h4 onClick={() => { setShow(!show) }} >{title} Requirements <span><FontAwesomeIcon icon={show ? faMinus : faPlus} /></span> </h4>
         <ul className={show ? 'visible' : 'invisible'}>
            {listItems.map((item, index) => (<li key={index}>{item}</li>))}
         </ul>
      </>
   )

   return dropdownBlock
}

export default useDropdown