import Typography from '@mui/material/Typography';

import styles from '../styles/components/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={ styles.footerBase }>
      <Typography variant='caption'>
        camiilacguimaraes@gmail.com 
        <span className={ styles.span }> · </span> 
        (31) 9.9176-2261
      </Typography>
      <Typography variant='caption' className={ styles.direitos }> © 2020 Todos os direitos reservados.</Typography>
    </footer>
  );
}