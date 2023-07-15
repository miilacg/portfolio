import Link from 'next/link';

import Carousel from 'react-bootstrap/Carousel';

import Typography from '@mui/material/Typography';

import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { isMobile } from 'react-device-detect';
import { projetos } from '../services/projetos';

import styles from '../styles/pages/Projetos.module.scss';


const useStyles = makeStyles((theme) => ({
  carousel: {
    '& .carousel-item > div': {
      padding: isMobile && '0',
    },
    '& .carousel-control-prev': {
      display: isMobile && 'none',
    },
    '& .carousel-control-next': {
      display: isMobile && 'none',
    },
  }
}));

export default function Projetos() {
  const classes = useStyles();
  const isSmall = useMediaQuery('(max-width: 800px)');

  const categories = Object.keys((projetos.map((project) => { return project.category })).reduce((acc, curr) => (acc[curr] = '', acc), {}));


  return (  
    <main className={ styles.mainProjects }>       
      <Typography variant='h1'>Portfólio</Typography>
      <Typography variant='h3'>Alguns dos meus projetos</Typography>

      {categories.map((category) => {
        return (
          <section key={category}>
            <Typography variant='h2'>{ category }</Typography>

            <Carousel className={ classes.carousel } indicators={ false } interval={ 50000 }>
              { projetos.map((project) => {
                return (
                  category == project.category && (
                    <Carousel.Item key={ project.id }>
                      <div className={ styles.project }>
                        <div
                          className={ styles.description }
                          style={{
                            width: !isSmall && project.image ? '50%' : '100%',
                            margin: !isSmall && project.image ? '0 1.5625rem 0 0' : '0'
                          }}
                        >
                          <Typography variant='h3'> { project.title } </Typography>

                          <div dangerouslySetInnerHTML={{ __html: project.description }} />  

                          <Typography variant='body1' className={ styles.tech }> 
                            <strong style={{ marginRight: '.2rem' }}>Linguagens e tecnologias utilizadas:  </strong> { project.languages }.
                          </Typography>
                          
                          <a href={ project.url } target='_blank'> Visite o site </a>
                        </div> 
                        
                        { !isSmall && project.image && (
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