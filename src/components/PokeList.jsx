import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PokeList = ({url, name}) => {

    const urlList = url;
    const [data, setData] = useState([]);
    const [dataStats, setDataStats] = useState([]);
    const [list, setList] = useState([]);
    const [listOthers, setListOthers] = useState([]);

    useEffect( () => {
        axios.get(urlList)
        .then( response => {
            setData(response.data);
            setDataStats(response.data.stats);
            setList(response.data.sprites)
            setListOthers(response.data.sprites.other.home)
        } )
        .catch( () => { alert("No se encontraron más pokemones") } )
    }, [urlList])


    const styles = {        
        article: {
            backgroundColor: "white",
            borderRadius: "20px 20px 0 0",
            padding: "20px 0 0 0",
            margin: "10px",
            width: "90%",
            textAlign: "center",
            textTransform: "capitalize",
            boxShadow: "4px 4px 20px 1px rgba(0,0,0,0.3)"
        },
        figure: {
            backgroundColor: "white",
            fontSize: "2rem"
        },
        figureImg: {
            width: "100%",
        },
        figureSpan: {
            float: "right",
            fontSize: "14px",
            padding: "4px",
        },
        listItem: {
            listStyleImage: "linear-gradient(#e66465, #9198e5)",
            textAlign: "start",
            padding: "4px",
            marginLeft: "20px"
        },
        footerCard: {
            backgroundColor: "#e5e5f7",
            with: "100%",
            padding: "20px",
        }
    } 

    return (
        <article style={ styles.article }>
            <figure style={ styles.figure }>
                <figcaption>{name}</figcaption>
                <img src={listOthers.front_default} alt={list.name} srcSet=""  style={ styles.figureImg }/>
                <span style={ styles.figureSpan }>ID: {data.id}</span>
            </figure>
            <footer style={ styles.footerCard }>
                <h3>Stats</h3>
                <hr />
                <ul>
                    { dataStats.map( (el, key) => (
                        <li key={key} style={ styles.listItem }> 
                            <b>{el.stat.name}:</b> {el.base_stat}
                        </li>
                    ) ) }
                </ul>  
            </footer>
        </article>
    )
}

export default PokeList

