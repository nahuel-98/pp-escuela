import React, {useState} from "react";

import { Route } from "react-router-dom";
// import MyNotes from "./components/MyNotes/MyNotes.js";
// import Modal from './components/modal-componente/Modal'
import styled from 'styled-components';
import Navbar from "./components/navbar/Navbar.jsx";
import Body from "./components/body/Body.jsx"
import Footer from "./components/footer/Footer.jsx";
import historia from "./components/latecnica/latecnica.jsx";
import unidades from "./components/unidadesA/unidades.jsx";
import practicas from "./components/practicasProf/practicas.jsx";
import location from "./components/location/location.jsx";


function App() {
//   const [estadoModal1, cambiarEstadoModal, titulo] = useState(false)

  return (
      <React.Fragment>
        <Navbar/>
        
        <Route exact path="/" component={Body} />
        <Route exact path="/" component={Footer} />
        <Route exact path="/historia" component={historia} />
        <Route exact path="/location" component={location} />
        <Route exact path="/practicasProfesionalizantes" component={practicas} />
        <Route exact path="/unidadesAcademicas" component={unidades} />
          {/* <Navbar/> */}
          
          {/* <ContenedorBotones>
          <Boton onClick={() => cambiarEstadoModal(!estadoModal1) } >Modal 1</Boton>
          </ContenedorBotones>
          
          <Modal estado={estadoModal1} cambiarEstado = {cambiarEstadoModal}>
            <Contenido>
            <h1>Are you sure you want to delete this note?</h1>
            <Boton>Yes</Boton>
            <Boton onClick={ () => cambiarEstadoModal(!estadoModal1) } >No</Boton>
            </Contenido>
          </Modal>

          <Route path="/create" component={createEditNotes} /> */}
      </React.Fragment>
  );
}

export default App;