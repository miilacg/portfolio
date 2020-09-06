import React from 'react';

function Link(props){/*iniciar todo componente com letra maiuscula*/
    /*props é um objeto e tras as coisas do componente*/
    // propos => {className: "o que alguém passar", href: "/"}
    return (
        <a href = {props.href} className = {props.className}>
               {props.children}
        </a>
    );
}

export default Link; /*para conseguir usar em outros lugares*/