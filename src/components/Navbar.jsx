import React from 'react'
import DB_Navlist from '../data/DB_Navlist'

const Navbar = () => {

    const styles = {
        nav: {
            backgroundColor: "black",
            padding: "20px",
        },
        nav__list: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            listStyle: "none",
        },
        nav__item: {
            textAlign: "center",
            color: "white",
            textDecoration: "none",
        },
    }

    return (
        <nav style={ styles.nav }>
            <ul style={ styles.nav__list }>

                { DB_Navlist.map( (obj, key) => (
                    <li key={key} style={ styles.nav__item }>
                        <a href={obj.href} target="_blank" rel="noreffer noreferrer">{obj.content}</a>                        
                    </li>
                )) }

            </ul>
        </nav>
    )
}

export default Navbar