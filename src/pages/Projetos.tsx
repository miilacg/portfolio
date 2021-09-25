import Link from 'next/link';

import styles from '../styles/pages/Projetos.module.scss';



type Project = { 
  id: string;
  category: string;
  title: string;
  description: string;
  languages: string;
  image: string;
  url: string;
  publishedAt: string;
} 

type ProjectsProps = { 
  projects: Project[];
}

export default function Projetos({ projects }: ProjectsProps) {
  return (  
    <main className={ styles.mainProjects }>       
      <h1>Portfólio</h1>
      <h2>Alguns dos meus projetos</h2>   

      <section>        
        { /*projects.map((projects, index) => {
          return (
            <div key={ projects.id } className={ styles.project }>
              <div className={ styles.description }>
                <h3> { projects.title } </h3>
                <div dangerouslySetInnerHTML={{ __html: projects.description }} />  
                <p> <strong>Linguagens e tecnologias utilizadas:</strong> { projects.languages } </p>
                
                <Link href={ projects.url }>
                  <a> Visite o site </a>
                </Link>
              </div>  
              
              <div className={ styles.image }>
                <img src={ projects.image } alt={ projects.title } /> 
              </div>            
            </div>
          )
        })*/}
      </section>
    </main>                      
  );
}