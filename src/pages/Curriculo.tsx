import PageDefault from '../components/PageDefault';
import Social from '../components/Social';

import styles from '../styles/pages/Home.module.css';

export default function Curriculo() {
  return (  
    <PageDefault href='/Curriculo'>       
      <div className={ styles.texto }>
        <h1>Página em contrução</h1>
      </div>  

      <Social />      
    </PageDefault>                      
  );
}