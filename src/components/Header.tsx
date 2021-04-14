import styles from '../styles/components/Header.module.css';

export default function Header() {
   return (     
      <nav className={ styles.menu }>
         <a href="#" className={ styles.logo }>
            <img className={ styles.logo } src="imagens/logo.svg" alt="camila guimarães" />
         </a>

         <div className={ styles.linksMenu }>
            <a className={ styles.link } href="#">HOME</a>
            <a className={ styles.link } href="#">SOBRE</a>
            <a className={ styles.link } href="#">CURRÍCULO</a>
            <a className={ styles.link } href="#">PROJETOS</a>
            <a className={ styles.link } href="#">CONTATO</a>
         </div>
      </nav>
   );
}