import myContext from "./context";
import { useContext, useState } from "react";
const D = () => {
    const { setState } = useContext(myContext);
    const [dvalue, setDvalue] = useState("")
    return(
        <>
        <h2>Component D</h2>
        <input type="text" onChange={e => setDvalue(e.target.value)} placeholder="Enter the Text"/>
        <button onClick={()=>setState(dvalue)}>Send data</button>
        </>
    )
}

export default D;