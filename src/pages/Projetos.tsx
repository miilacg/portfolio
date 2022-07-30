import Link from 'next/link';

import Typography from '@mui/material/Typography';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

import { projetos } from '../services/projetos';

import styles from '../styles/pages/Projetos.module.scss';



export default function Projetos() {
  return (  
    <main className={ styles.mainProjects }>       
      <Typography variant='h1'>Portfólio</Typography>
      <Typography variant='h2'>Alguns dos meus projetos</Typography>   

      <section>        
        <Carousel>
          { projetos.map((project, index) => {
            return (
              /*<Carousel.Item key={ project.id } className={ styles.project }> */
              <Carousel.Item key={ project.id } >
                <div className={ styles.description }>
                  <Typography variant='h3'> { project.title } </Typography>

                  <div dangerouslySetInnerHTML={{ __html: project.description }} />  

                  <Typography variant='body1'> 
                    <strong style={{ margin: '.2rem' }}>Linguagens e tecnologias utilizadas: </strong> { project.languages }.
                  </Typography>
                  
                  <Link href={ project.url }>
                    <a> Visite o site </a>
                  </Link>
                </div> 
                <div className={ styles.image }>
                  <img src={ project.image } alt={ project.title } /> 
                </div>         
              </Carousel.Item>
            )
          })}
        </Carousel> 
      </section>
    </main>                      
  );
}