import React, { useState } from 'react'
import styled from 'styled-components'
import Footerstyle from './footerStyle.css'

function Footer() {

  // const [clicked, setClicked] = useState(false)
  // const handleClick = () => {
  //   //cuando esta true lo pasa a false y vice versa
  //   setClicked(!clicked)
  // }
  return (
    <>
    <footer>
        <div class='informacion'>
            <div id="info-1">
                <h3>Dirección </h3>
                
                    Avenida Mariano Moreno S/N
                    Aguaray, Salta
                    Código Postal 4566.
                
                <div class="tel">
                    <h3>Teléfono </h3>
                    3873 - 460230
                </div>
            </div>
        </div>
        <div class="contacto-img">
            <img id='imal' src="../assets/profile/perfil2.jpg" alt="" srcset="" />
        </div>
    </footer>
    
    </>
  )
}

export default Footer