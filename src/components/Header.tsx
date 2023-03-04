import { useState } from 'react';
import Link from 'next/link';

import IconButton from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';

import MenuSharpIcon from '@mui/icons-material/MenuSharp';

import styles from '../styles/components/Header.module.scss';
 


export default function Header() {
  const isLessThan700 = useMediaQuery('(max-width: 700px)');
  const isSmall = useMediaQuery('(max-width: 600px)');

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (   
    <nav className={ styles.menu }>
      <a href="/" className={ styles.logo }>
        <img
          className={ styles.logo }
          src={ isSmall ? 'imagens/logoMobile.svg' : 'imagens/logo.svg' }
          alt="logo Camila Guimarães"
        />
      </a>

      { isLessThan700 ? (
        <div>
          <IconButton
            className={ styles.iconButton }
            aria-controls={open ? 'basic-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup='true'
            onClick={handleClick}
          >
            <MenuSharpIcon />
          </IconButton>
          <Menu
            className={styles.linksMenu}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><Link href='/'>HOME</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href='/SobreMim'>SOBRE</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href='/Curriculo'>CURRÍCULO</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href='/Projetos'>PROJETOS</Link></MenuItem>
            {/*<MenuItem><Link href="/Contato">CONTATO</Link></MenuItem>*/}
          </Menu>
        </div>
      ) : (
        <div className={ styles.linksMenu }>
          <Link href='/'>HOME</Link>
          <Link href="/SobreMim">SOBRE</Link>
          <Link href="/Curriculo">CURRÍCULO</Link>
          <Link href="/Projetos">PROJETOS</Link>
          {/*<Link href="/Contato">CONTATO</Link>*/}
        </div>
      ) }
    </nav>
  );
}