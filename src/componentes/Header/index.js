import React from 'react';
import nome from '../../imagens/nome.jpg';
import { Link } from 'react-router-dom';
import './menu.css';

function Menu({ home, sobreMim, contato, projetos }){/*iniciar todo componente com letra maiuscula*/
    return (
        <nav className='Menu'>
            <Link to="/">
                <img className="nome" src={nome} alt="camila guimarães"></img>
            </Link>

            <div className='linksMenu'>
                <Link  to={home}>
                    HOME
                </Link>
                <Link to={sobreMim}>
                    SOBRE
                </Link>
                <Link to={projetos}>
                    PROJETOS
                </Link>
                <Link to={contato}>
                    CONTATO
                </Link>
            </div>            
        </nav>
    );
}

export default Menu; /*para conseguir usar em outros lugares*/