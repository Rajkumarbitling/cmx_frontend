import React from 'react'
import icon1 from "../icons/icon1.png";
import icon2 from "../icons/icon2.png";
import icon3 from "../icons/icon3.png";
import icon4 from "../icons/icon4.png";
import { QrCodeScan } from "react-bootstrap-icons";

function RewardSection() {
  return (
    <div className="rewardSection mb-4">
      <h3 className="family-gotham">Available Rewards</h3>
      <div className="text-center gray h-35px">
        <div className="separator" data-content="Free Ticket Vouchers"></div>
      </div>
      <div className="col-12 rewardItem py-4">
        <img src={icon1} className="imgIcons" alt="" />
        <div>
          <p className="text-white">Birthday Free Voucher</p>
          <span className="text-xxs gray">Expires on 22 April 2022</span>
        </div>
        <button className="text-end text-uppercase rounded-pill text-white text-xxs">
          Redeem now
        </button>
      </div>
      <div className="col-12 rewardItem py-4">
        <img src={icon2} className="imgIcons" alt="" />
        <div>
          <p className="text-white">Ticket Voucher</p>
          <span className="text-xxs text-danger text-bold">
            Expires on 22 April 2022
          </span>
        </div>
        <button className="text-end text-uppercase rounded-pill text-white text-xxs">
          Redeem now
        </button>
      </div>
      <div className="text-center gray h-35px">
        <div
          className="separator"
          data-content="Food & Beverage Vouchers"
        ></div>
      </div>
      <div className="col-12 rewardItem py-4">
        <img src={icon3} className="imgIcons" alt="" />
        <div>
          <p className="text-white">Birthday $10 Voucher</p>
          <span className="text-xxs gray">Expires on 05 May 2022</span>
        </div>
        <button className="text-end text-uppercase rounded-pill text-white text-xxs">
          <span className="small">
            <QrCodeScan className="me-1 text-bold text-lg" /> Scan QR Code
          </span>
        </button>
      </div>
      <div className="col-12 rewardItem py-4">
        <img src={icon3} className="imgIcons" alt="" />
        <div>
          <p className="text-white">Birthday $10 Voucher</p>
          <span className="text-xxs gray">Expires on 24 June 2022</span>
        </div>
        <button className="text-end text-uppercase rounded-pill text-white text-xxs">
          <span className="small">
            <QrCodeScan className="me-1 text-bold text-lg" /> Scan QR Code
          </span>
        </button>
      </div>
      <div className="col-12 rewardItem py-4">
        <img src={icon4} className="imgIcons" alt="" />
        <div>
          <p className="text-white">$5 Voucher</p>
          <span className="text-xxs gray">Expires on 05 July 2022</span>
        </div>
        <button className="text-end text-uppercase rounded-pill text-white text-xxs">
          <span className="small">
            <QrCodeScan className="me-1 text-bold text-lg" /> Scan QR Code
          </span>
        </button>
      </div>
    </div>
  );
}

export default RewardSection