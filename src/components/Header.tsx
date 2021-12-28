import * as  appStyle from '../materialui/styles';
import styles from '../styles/components/Header.module.scss';
 

export default function Header() { 
   return (   
      <nav className={ styles.menu }>
         <a href="/" className={ styles.logo }>
            <img className={ styles.logo } src="imagens/logo.svg" alt="camila guimarães"/>
         </a>

         <div className={ styles.linksMenu }>
            <a href="/" className={ styles.link } style={ appStyle.link }>HOME</a>
            <a href="/SobreMim" className={ styles.link } style={ appStyle.link }>SOBRE</a>
            <a href="/Curriculo" className={ styles.link } style={ appStyle.link }>CURRÍCULO</a>
            <a href="/Projetos" className={ styles.link } style={ appStyle.link }>PROJETOS</a>
            {/*<a href="/Contato" className={ styles.link } style={ appStyle.link }>CONTATO</a>*/}
         </div>
      </nav>
   );
}