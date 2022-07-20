import React from 'react'
import icon5 from "../icons/icon5.png";
import icon6 from "../icons/icon6.png";
import icon7 from "../icons/icon7.png";
import icon8 from "../icons/icon8.png";
import ListGroup from "react-bootstrap/ListGroup";
import { CheckCircleFill } from "react-bootstrap-icons";

function BenefitSection() {
  return (
    <div className="benfitSection">
      <h3 className="family-gotham">Your Gold Benefits</h3>
      <div className=" benefitDiv mt-4">
        <span className="bgimg-right"></span>
        <span className="bgimg-left"></span>
        <div className="col-12 rewardItem py-4">
          <img src={icon5} className="imgIcons" alt="" />
          <div>
            <p className="text-white">Free Tickets</p>
            <ListGroup variant="flush" className="py-2 benefitList">
              <ListGroup.Item className="px-0 border-0">
                <CheckCircleFill className="me-2" /> 1 free ticket issued on
                your birthday <sup>1</sup>
              </ListGroup.Item>
              <ListGroup.Item className="px-0 border-0">
                <CheckCircleFill className="me-2" /> 1 free ticket for every 10
                tickets purchased
              </ListGroup.Item>
              <ListGroup.Item className="px-0 border-0">
                <CheckCircleFill className="me-2" /> 1 optional Free ticket
                after receiving 500 Food & Beverage Points
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className="col-12 rewardItem py-4">
          <img src={icon6} className="imgIcons" alt="" />
          <div>
            <p className="text-white">Free Food & Drinks</p>
            <ListGroup variant="flush" className="py-2 benefitList">
              <ListGroup.Item className="px-0 border-0">
                <CheckCircleFill className="me-2" /> 1 optional $5.00 Free Food
                & Beverage Voucher after reaching 500 Food & Beverage Points{" "}
                <sup>2</sup>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className="col-12 rewardItem py-4">
          <img src={icon7} className="imgIcons" alt="" />
          <div>
            <p className="text-white">Wednesday Special Pricing</p>
            <ListGroup variant="flush" className="py-2 benefitList">
              <ListGroup.Item className="px-0 border-0">
                <CheckCircleFill className="me-2" /> $5 Tickets every wednesday{" "}
                <sup>3</sup>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className="col-12 rewardItem py-4">
          <img src={icon8} className="imgIcons" alt="" />
          <div>
            <p className="text-white">Earn Food & Beverage Points</p>
            <ListGroup variant="flush" className="py-2 benefitList">
              <ListGroup.Item className="px-0 border-0">
                <CheckCircleFill className="me-2" /> Earn 5x points for every
                dollar spent <sup>4</sup>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
      <ol className="p-4 px-3 terms m-0">
        <li>All free tickets expire 60 days after issueance.</li>
        <li>Excludes alcohol Vouchers expires 60 days after issueance.</li>
        <li>Convenience fee & upgrade fees apply. Excludes holidays.</li>
        <li>
          Every 500 points can be redeemed for free tickets or for free food &
          beverage vouchers
        </li>
      </ol>
      <a href="#" class="skewde-btn text-uppercase ms-2">
        <span className="small"> View Other Plans</span>
      </a>
    </div>
  );
}

export default BenefitSection