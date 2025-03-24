import { useState } from "react"

function BozhilkataApp(){
    const [activated, setActivated] = useState(false);
    return(
        
        <div>
            <h2> React UseState HOOK :</h2>
            <p>I am {activated ? "on"  : "off"}.</p>
            {/*<button type="button" onClick = { () => setActivated(activated ? false : true)}>
                 Press me! 
                 </button>*/}
            <button type="button" onClick = { () => setActivated(activated ? false : true)}>
                {activated ? "Deactivate me!" : "Activate me!"} 
                </button>
        </div>
    );
}

export default BozhilkataApp;