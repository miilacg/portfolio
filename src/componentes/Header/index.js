import React from 'react';
import nome from '../../imagens/logo.svg';
import { Link } from 'react-router-dom';
/*import { Navbar, Nav } from 'react-bootstrap';*/
import './menu.css';
import styled from 'styled-components';

function Menu({ home, sobreMim, formacao, contato, projetos }){/*iniciar todo componente com letra maiuscula*/
    return (     
        <nav className='Menu'>
            <Link to="/" className="logo">
                <img className="logo" src={nome} alt="camila guimarães"></img>
            </Link>

            <div className='linksMenu'>
                <Link to={home}>HOME</Link>
                <Link to={sobreMim}>SOBRE</Link>
                <Link to={formacao}>FORMAÇÃO</Link>
                <Link to={projetos}>PROJETOS</Link>
                <Link to={contato}>CONTATO</Link>
            </div>
        </nav>
    );
}

export default Menu; /*para conseguir usar em outros lugares*/