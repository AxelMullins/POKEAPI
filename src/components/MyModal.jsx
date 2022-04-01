import React from "react";
import { Card, Col, ListGroup, Modal, ProgressBar, Row } from "react-bootstrap";

export default function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-capitalize">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <Row>
          <Col>
            <Card.Img
              variant="top"
              className="w-75 mx-auto p-0 mb-4"
              src={props.img}
            />
            <ListGroup>
              { props.dataTypes.map( el => (
                <b className="text-uppercase text-secondary">
                    {el.type.name}
                </b>
              )) }
            </ListGroup>
          </Col>
          <Col>
            <ListGroup className="text-start" variant="flush">
              {props.dataStats.map((el, key) => (
                <ListGroup.Item key={key}>
                  <b className="text-uppercase fw-bold">
                    {el.stat.name}:
                  </b>{" "}
                  {el.base_stat}
                  { el.base_stat < 25 && <ProgressBar variant="danger" now={el.base_stat} />}
                  { (el.base_stat >= 25 && el.base_stat < 75) && <ProgressBar variant="warning" now={el.base_stat} />}
                  { (el.base_stat >= 75) && <ProgressBar variant="success" now={el.base_stat} />}                  
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
