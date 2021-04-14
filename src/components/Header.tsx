import { useContext } from 'react';
import { BodyContext } from '../contexts/BodyContext';

import styles from '../styles/components/Header.module.css';

export default function Header() {
   const { 
      trocaPage,
   } = useContext(BodyContext);

   return (     
      <nav className={ styles.menu }>
         <a href="#" className={ styles.logo }>
            <img className={ styles.logo } src="imagens/logo.svg" alt="camila guimarães" />
         </a>

         <div className={ styles.linksMenu }>
            <a className={ styles.link } href="#" onClick={ trocaPage }>HOME</a>
            <a className={ styles.link } href="#" onClick={ trocaPage }>SOBRE</a>
            <a className={ styles.link } href="#" onClick={ trocaPage }>CURRÍCULO</a>
            <a className={ styles.link } href="#" onClick={ trocaPage }>PROJETOS</a>
            <a className={ styles.link } href="#" onClick={ trocaPage }>CONTATO</a>
         </div>
      </nav>
   );
}