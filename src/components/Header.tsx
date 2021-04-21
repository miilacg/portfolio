import { useRouter } from 'next/router'
import styles from '../styles/components/Header.module.css';

export default function Header({ href }) {
   const router = useRouter();    
   const link = {
      color: router.asPath == href ? 'white' : 'white'
   }
   

   return (   
      <nav className={ styles.menu }>
         <a href="/" className={ styles.logo }>
            <img className={ styles.logo } src="imagens/logo.svg" alt="camila guimarães"/>
         </a>

         <div className={ styles.linksMenu }>
            <a href="/" className={ styles.link } style={ link }>HOME</a>
            <a href="/SobreMim" className={ styles.link } style={ link }>SOBRE</a>
            <a href="/Curriculo" className={ styles.link }>CURRÍCULO</a>
            <a href="/Projetos" className={ styles.link }>PROJETOS</a>
            {/*<a href="/Contato" className={ styles.link }>CONTATO</a>*/}
         </div>
      </nav>
   );
}