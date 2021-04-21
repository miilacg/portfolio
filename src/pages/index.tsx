import React from 'react';
import PageDefault from '../components/PageDefault';
import Social from '../components/Social';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (  
    <PageDefault href='/'>       
      <div className={ styles.texto }>
        <h2>Eu sou</h2>      
        <h1>Camila Guimarães</h1>
        <h3>desenvolvedora web</h3>
      </div>  

      <Social />      
    </PageDefault>                      
  );
}