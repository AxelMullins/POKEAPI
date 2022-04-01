import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import MyModal from "./MyModal";

const PokeList = ({ url, name}) => {
  const urlList = url;
  const [data, setData] = useState([]);
  const [dataStats, setDataStats] = useState([]);
  const [dataTypes, setDataTypes] = useState([]);
//   const [list, setList] = useState([]);
  const [listOthers, setListOthers] = useState([]);

  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    axios
      .get(urlList)
      .then((response) => {
        setData(response.data);
        setDataStats(response.data.stats);
        setDataTypes(response.data.types);
        // setList(response.data.sprites);
        setListOthers(response.data.sprites.other.home);
      })
      .catch(() => {
        alert("No se encontraron más pokemones");
      });
  }, [urlList]);

  return (
    <Col xs={3}>
      <Button
        variant="outline-light"
        className="shadow border-0 cards"
        onClick={() => setModalShow(true)}
      >
        <Card bg="transparent" className="border-0">
            { !listOthers.front_default && <Card.Img variant="top" src="holder.js/100px180" />}
            { listOthers.front_default && <Card.Img variant="top" src={listOthers.front_default} />}          
          <Card.Body className="text-secondary">
            <Card.Title className="text-capitalize"><h5>{name}</h5></Card.Title>
            <span>ID: {data.id}</span>
          </Card.Body>
        </Card>
      </Button>
      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        dataStats={dataStats}
        dataTypes={dataTypes}
        img={listOthers.front_default}
        name={name}
      />
    </Col>
  );
};

export default PokeList;
