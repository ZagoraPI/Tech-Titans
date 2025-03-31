import { useState } from "react";

const AlexGifShower = () => {
    const [visibility_state, setVisibility] = useState(false);

    const loadTenorScript = () => {
        const script = document.createElement("script");
        script.src = "https://tenor.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
    };

    return (
        <div>
            <h2>Visibility: {visibility_state ? "Visible" : "Hidden"}</h2>
            <button 
                onClick={() => {
                    setVisibility(!visibility_state);
                    setTimeout(loadTenorScript, 100);
                }}>Show/Hide Gif</button>

            {visibility_state && (
                <div className="tenor-gif-embed" data-postid="26931104" 
                    data-share-method="host" data-aspect-ratio="1" data-width="100%">
                </div>)}
        </div>
    );
};

export default AlexGifShower;
