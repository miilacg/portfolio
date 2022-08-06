import Link from 'next/link';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

import Typography from '@mui/material/Typography';

import { projetos } from '../services/projetos';

import styles from '../styles/pages/Projetos.module.scss';



export default function Projetos() {
  const categories = Object.keys((projetos.map((project) => { return project.category })).reduce((acc, curr) => (acc[curr] = '', acc), {}));


  return (  
    <main className={ styles.mainProjects }>       
      <Typography variant='h1'>Portfólio</Typography>
      <Typography variant='h3'>Alguns dos meus projetos</Typography>

      {categories.map((category) => {
        return (
          <section key={category}>
            <Typography variant='h2'>{ category }</Typography>

            <Carousel indicators={ false } interval={ 50000 }>
              { projetos.map((project) => {
                return (
                  category == project.category && (
                    <Carousel.Item key={ project.id }>
                      <div className={ styles.project }>
                        <div className={ styles.description } style={{ width: project.image ? '50%' : '100%', margin: project.image ? '0 1.5625rem 0 0' : '0' }}>
                          <Typography variant='h3'> { project.title } </Typography>

                          <div dangerouslySetInnerHTML={{ __html: project.description }} />  

                          <Typography variant='body1' className={ styles.tech }> 
                            <strong style={{ marginRight: '.2rem' }}>Linguagens e tecnologias utilizadas:  </strong> { project.languages }.
                          </Typography>
                          
                          <Link href={ project.url }>
                            <a> Visite o site </a>
                          </Link>
                        </div> 
                        
                        { project.image && (
                          <div className={ styles.image }>
                            <img src={ project.image } alt={ project.title } /> 
                          </div>  
                        )} 
                      </div>
                    </Carousel.Item>
                  )
                )
              })}
            </Carousel> 
          </section>
        )
      })}
    </main>                      
  );
}