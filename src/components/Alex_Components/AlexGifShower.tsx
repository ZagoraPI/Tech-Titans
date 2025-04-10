import { useState } from "react";

const AlexGifShower = () => {
  const [visible, setVisible] = useState(false);

  const loadTenorScript = () => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);};

  return (
    <div style={{ textAlign: "center", margin: "30px" }}>
      <h2>Visibility: {visible ? "Visible" : "Hidden"}</h2>
      <button
        onClick={() => {
          setVisible(!visible);
          setTimeout(loadTenorScript, 100);}}>
        Show/Hide Gif
      </button>

      {visible && (
        <div style={{ marginTop: "25px" }}>
          <div
            className="tenor-gif-embed"
            data-postid="26931104"
            data-share-method="host"
            data-aspect-ratio="1"
            data-width="350px"
          ></div>
        </div>)}
    </div>);};

export default AlexGifShower;
