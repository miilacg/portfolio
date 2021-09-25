import Link from 'next/link';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

import { projetos } from '../services/projetos';

import styles from '../styles/pages/Projetos.module.scss';



export default function Projetos() {
  console.log('projetos ', projetos);

  return (  
    <main className={ styles.mainProjects }>       
      <h1>Portfólio</h1>
      <h2>Alguns dos meus projetos</h2>   

      <section>        
        <Carousel>
          { projetos.map((project, index) => {
            return (
              /*<Carousel.Item key={ project.id } className={ styles.project }> */
              <Carousel.Item key={ project.id } >
                <div className={ styles.description }>
                  <h3> { project.title } </h3>
                  <div dangerouslySetInnerHTML={{ __html: project.description }} />  
                  <p> <strong>Linguagens e tecnologias utilizadas:</strong> { project.languages } </p>
                  
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