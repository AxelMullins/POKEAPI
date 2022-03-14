import React, { useState } from 'react'
import Radium from 'radium';

const Footer = () => {
  const [clicked, setClicked] = useState(false)

  let i = 0,
      txt = 'Axel Mullins - Desarrollador Frontend';

  function typeWriter() {
    if (i < txt.length && clicked === false) {
      document.getElementById("name").innerHTML += txt.charAt(i);
      document.getElementById("btn").innerHTML = "";
      i++;
      setClicked(true)
      setTimeout(typeWriter, 20);
    }
  }

  const styles = {
    footer: {
      position: "fixed",
      bottom: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    containerBtn: {      
      disply: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "grey",
      padding: "10px",
      color: "white",
      borderRadius: "0 10px 10px 0",
      borderLeft: "6px solid orange",
      ':hover': {
        backgroundColor: "black",
      }
    },
    containerLink: {
      disply: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      fontSize: "40px"
    },
    button: {
      border: "none",
      fontSize: "40px",
      padding: "4px",
      backgroundColor: "transparent"
    },
    alert: {
      ':hover': {
        cursor: "pointer",
      }
    },
    icon: {
      padding: "10px"
      }
    }

  return (
    <footer style={ styles.footer }>

      <section onClick={typeWriter} style={ styles.containerBtn }>
        <button id="btn" style={ styles.button }>
        <i key="one" className="fa-solid fa-circle-info" style={ styles.alert }></i></button>
        <span id="name"></span>
      </section>

      <section style={ styles.containerLink }>
        <a href="https://www.linkedin.com/in/axel-mullins/" target="_blank" rel="noreferrer" style={ styles.icon }>
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/AxelMullins" target="_blank" rel="noreferrer" style={ styles.icon }>
          <i className="fa-brands fa-github"></i>
        </a>
      </section>     
      
    </footer>
  )
}

export default Radium(Footer)