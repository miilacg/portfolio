import Link from 'next/link';

//import Link from '@mui/material/Link';

import styles from '../styles/components/Header.module.scss';
 

export default function Header() { 
   return (   
      <nav className={ styles.menu }>
         <a href="/" className={ styles.logo }>
            <img className={ styles.logo } src="imagens/logo.svg" alt="camila guimarães"/>
         </a>

         <div className={ styles.linksMenu }>
            <Link href='/'>HOME</Link>
            <Link href="/SobreMim">SOBRE</Link>
            <Link href="/Curriculo">CURRÍCULO</Link>
            <Link href="/Projetos">PROJETOS</Link>
            {/*<Link href="/Contato">CONTATO</Link>*/}
         </div>
      </nav>
   );
}