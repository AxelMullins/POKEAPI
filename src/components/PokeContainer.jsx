import React, { useEffect, useState } from 'react'
import axios from "axios";
import Loader from './Loader';
import PokeList from './PokeList';
import { Button, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const PokemonCards = () => {
    const [baseUrl, setBaseUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=4")
    const [post, setPost] = useState([]);
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(<Loader />);

    useEffect( () => {
        axios.get(baseUrl)        
        .then(response => {
            setData(response.data);
            setPost(response.data.results);
            setLoader("")
        })
        .catch( () => { alert("Upps! No se encontraron más pokemones") })
    }, [baseUrl] )

    const btnNext = () => setBaseUrl(data.next);
    const btnPrev = () => setBaseUrl(data.previous);

    return (
        <>
            <Container className='d-flex justify-content-around'>
                <Button variant="dark" onClick={ btnPrev }><FontAwesomeIcon icon={faChevronCircleLeft}/></Button>
                <Button variant="dark" onClick={ btnNext }><FontAwesomeIcon icon={faChevronCircleRight}/></Button>
            </Container>
            <Container className='my-5'>
                {loader}
                <Row>
                    { post.map( (el, key) =>  (                                
                        <PokeList key={key} url={el.url} name={el.name} />
                        ))}
                </Row>
            </Container>
            <Container className='d-flex justify-content-around'>
                <Button variant="dark" onClick={ btnPrev }><FontAwesomeIcon icon={faChevronCircleLeft}/></Button>
                <Button variant="dark" onClick={ btnNext }><FontAwesomeIcon icon={faChevronCircleRight}/></Button>
            </Container>
        </>
    )
}

export default PokemonCards