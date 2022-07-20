import React from 'react'
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircleProgress(props) {
  return (
    <CircularProgressbarWithChildren
      value={props.value}
      strokeWidth={50}
      styles={buildStyles({
        strokeLinecap: "butt",
        pathColor: "#8c2131",
        trailColor: "#bbbbbb",
      })}
    >
      <div className="circleDiv px-5">
        <p className="circle-number family-roboto m-0">{props.number}</p>
        <p className="circle-text text-uppercase">{props.text}</p>
      </div>
    </CircularProgressbarWithChildren>
  );
}

export default CircleProgress