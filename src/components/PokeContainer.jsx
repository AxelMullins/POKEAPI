import React, { useEffect, useState } from 'react'
import axios from "axios";
import Loader from './Loader';
import PokeList from './PokeList';

const PokemonCards = () => {
    const [baseUrl, setBaseUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=5")
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

    const styles = {
        container: {
            display: "grid",
            gridTemplateColumns: "20% 20% 20% 20% 20%",
            gridTemplateAreas: "200px",
            placeItems: "center",
            padding: "10px"
        },
        buttonContainer: {
            display: "flex",
            justifyContent: "space-around",
            textTransform: "uppercase",
            padding: "20px",
        },
        button: {
            padding: "10px",
            border: "none",
            backgroundColor: "transparent",
            fontSize: "40px",
            cursor: "pointer",
            color: "grey",
        }
    }

    return (
        <>
            <section style={ styles.container }>
                {loader}
                { post.map( (el, key) =>  (                                
                    <PokeList key={key} url={el.url} name={el.name}/>
                ))}
            </section>
            <div style={ styles.buttonContainer }>
                <button style={ styles.button } onClick={ btnPrev }><i className="fa-solid fa-circle-chevron-left"></i></button>
                <button style={ styles.button } onClick={ btnNext }><i className="fa-solid fa-circle-chevron-right"></i></button>
            </div>
        </>
    )
}

export default PokemonCards