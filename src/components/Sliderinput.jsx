import React, { useState } from 'react'
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

function Sliderinput() {
    const [horizontal, setHorizontal] = useState(3);
    const horizontalLabels = {
      0: "0",
      100: "7",
    };

    const handleChangeHorizontal = (value) => {
      setHorizontal(value);
    };

  return (
    <div className="slider custom-labels text-center">
      <Slider
        min={0}
        max={7}
        value={horizontal}
        labels={horizontalLabels}
        handleLabel={horizontal}
        tooltip={false}
        onChange={handleChangeHorizontal}
      />
      <span className="small">Number of Tickets</span>
    </div>
  );
}

export default Sliderinput;