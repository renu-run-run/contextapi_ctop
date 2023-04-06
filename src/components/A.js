import myContext from "./context";
import { useState } from "react"
import B from "./B"

const A = () =>{
    const [state, setState] = useState(" ");
    return(
        <>
         <h2>Component A </h2>
         <p style={{color:"red"}}>Data From D Comp.(Child component)-&gt;<h3>{state}</h3> </p><hr/>
         <myContext.Provider value={{ setState }}>
         <B/>
         </myContext.Provider>
         
        </>
    )
}
export default A
