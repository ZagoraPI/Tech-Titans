import { Button } from "@/components/ui/ShadCnButton";
import { useState } from "react"

function BozhilkataApp(){
    const [activated, setActivated] = useState(false);
    return(
        
        <div>
            <h2> React UseState HOOK :</h2>
            <p>I am {activated ? "on"  : "off"}.</p>

            
            <button type="button" onClick = { () => setActivated(activated ? false : true)}>
            {activated ? "Deactivate me!" : "Activate me!"} 
            </button> 
            <p>ShadCn button: </p>
            <Button variant="outline" type="button" onClick = { () => setActivated(activated ? false : true)}>
                {activated ? "Button off" : "Button on"}</Button>

        </div>
    );
}

export default BozhilkataApp;