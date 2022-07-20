import React from 'react'
import Sliderinput from "./Sliderinput";
import CircleProgress from "./CircleProgress";

function SliderSection() {
  return (
    <div className="sliderSection">
      <h3 className="family-gotham">Food & Beverage Purchases</h3>
      <p>
        Do 4 more Food & Beverage purchasesto reach{" "}
        <span className="platinum">Platinum</span> tier.
      </p>
      <Sliderinput />
      <p className="gray py-2">
        You have secured <span className="gold">Gold</span> Until{" "}
        <b>Dec 31st,2023</b>
      </p>
      <div className="row text-center">
        <div className="col-md-6 p-3">
          <div className="py-5">
            <CircleProgress
              value="66"
              number="07"
              text="Tickets purchased out of 20"
            />
          </div>
          <p>Buy 3 more tickets, to get your next free ticket</p>
        </div>
        <div className="col-md-6 p-3">
          <div className="py-5">
            <CircleProgress
              value="100"
              number="500"
              text="Food and Beverage Points out of 500"
            />
          </div>
          <button className="rounded-pill bg-white text-black text-xxs text-uppercase text-bold px-3">
            Redeem Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default SliderSection