import Social from '../components/Social';
import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  return (  
    <main className={ styles.mainHome }>
      <div className={ styles.texto }>
        <h2>Eu sou</h2>      
        <h1>Camila Guimarães</h1>
        <h3>desenvolvedora web</h3>
      </div>  

      <Social />      
    </main>
  );
}