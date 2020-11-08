import BlueButton from 'core/components/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'

const Home = () => (

    <div className="home-container">
        <div className="home-content">
            <h1>Desafio do Capítulo 3,<br/> Bootcamp DevSuperior</h1>
            <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br/>
               Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br/>
               Este design foi adaptado a partir de Ant Design System for Figma,<br/>
               de Mateusz Wierzbicki: <span>antforfigma@gmail.com</span></p>
        </div>
        <Link to="/search">
            <BlueButton text="Começar"/>
        </Link>
    </div>


);



export default Home;

