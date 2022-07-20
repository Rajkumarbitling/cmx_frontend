import React from 'react'
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { CheckCircleFill, QrCode } from "react-bootstrap-icons";

function CardSection() {
  return (
    <div className="cardSection mb-5">
      <h1 className="family-gotham">My CMX Rewards</h1>
      <hr />
      <Card className="text-black family-roboto rounded-6 px-5 py-2">
        <Card.Header>
          <div className="row">
            <div className="col-6 float-start">
              <span className="text-xxs">Current Tier</span>
              <h2 className="gold text-bold text-uppercase">Gold</h2>
            </div>
            <div className="col-6 text-end">
              <span className="text-xxs">Loyalty Number</span>
              <h4 className="text-bold text-uppercase mt-2">25068945631895</h4>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="px-0">
          <ListGroup variant="flush" className="py-2">
            <ListGroup.Item className="px-0 border-0">
              <CheckCircleFill className="me-2" /> Only two more Food & Beverage
              purchases to become Platinum
            </ListGroup.Item>
            <ListGroup.Item className="px-0 border-0">
              <CheckCircleFill className="me-2" /> Buy 2 more tickets to get
              your next free ticket
            </ListGroup.Item>
            <ListGroup.Item className="px-0 border-0">
              <CheckCircleFill className="me-2" /> Earn 220 more Food & Beverage
              points to receive your next reward
            </ListGroup.Item>
          </ListGroup>
          <div className="col position-relative py-2">
            <a href="#" class="skewde-btn text-uppercase ms-2">
              <span className="small">
                <QrCode className="me-1 text-bold text-lg" /> CMX rewards QR
                Code
              </span>
            </a>
            <span className="text-end float-end pt-4">
              <a href="#" className="text-main text-uppercase small">
                View your Unclaimed Rewards
              </a>
            </span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardSection