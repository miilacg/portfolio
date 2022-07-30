import Typography from '@mui/material/Typography';

import Social from '../components/Social';
import styles from '../styles/pages/Home.module.scss';



export default function Home() {
  return (  
    <main className={ styles.mainHome }>
      <div className={ styles.texto }>
        <Typography variant='h2'>Eu sou</Typography>      
        <Typography variant='h1'>Camila Guimarães</Typography>
        <Typography variant='h3'>desenvolvedora web</Typography>
      </div>  

      <Social />      
    </main>
  );
}