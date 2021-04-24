import PageDefault from '../components/PageDefault';
import Social from '../components/Social';

import styles from '../styles/pages/Home.module.scss';

export default function Projetos() {
  return (  
    <PageDefault href='/Projetos'>       
      <div className={ styles.texto }>
        <h1>Página em contrução</h1>
      </div>  

      <Social />      
    </PageDefault>                      
  );
}