import React from "react";
import Cabecalho from "../components/Cabecalho";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselItem, Container } from "react-bootstrap";
import Pagina from "../components/Pagina";

const Array = () => {

      const carros = ['Civic', 'Tucson', 'Celta', 'Doblo', 'Gol', 'Onix']
      const pessoa = {nome: 'Déborah', idade: '22', telefone: '(61) 98609-5989'}

  return (
    <>
      <Pagina titulo = 'Arrays'>
        <Container>
          <h2>Lista ordenada</h2>
          <ol>
          {carros.map(item => (
            <li>{item}</li>
          ))}
          </ol>
          
          
        </Container>
      </Pagina>
    </>
  );
};

export default Array;
