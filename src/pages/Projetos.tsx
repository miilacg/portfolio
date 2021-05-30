import { GetStaticProps } from 'next';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { api } from '../services/api';

import styles from '../styles/pages/Projetos.module.scss';



type Projeto = { 
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  url: string;
  publishedAt: string;
} 

type ProjetosProps = { 
  projetos: Projeto[];
}



export default function Projetos({ projetos }: ProjetosProps) {
  return (  
    <main className={ styles.mainProjetos }>       
      <h1>Portfólio</h1>
      <h2>Alguns dos meus projetos</h2>

      <section>
        <table cellSpacing={ 0 }>
          <thead>
            <tr>
              <th></th>
              <th>Podcast</th>
              <th>Integrantes</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            { projetos.map((projeto, index) => {
              return (
                <tr key={ projeto.id }>
                  <td style={{ width:72 }}>
                    { projeto.category }
                  </td> 
                  <td>
                    { projeto.title }
                  </td>    
                  <td>
                    { projeto.description }
                  </td> 
                  <td>
                    { projeto.url }
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </main>                      
  );
}

export const getStaticProps: GetStaticProps = async () => { 
  const { data } = await api.get('projetos', {
    params: {
      _sort: 'published_at',
      _order: 'desc'
    }
  })  

  const projetos = data.map(projeto => {
    return {
      id: projeto.id,
      category: projeto.category,
      title: projeto.title,
      description: projeto.description,
      image: projeto.image,
      url: projeto.url,
      publishedAt: format(parseISO(projeto.publishedAt), 'd MMM yy', { locale: ptBR }),
    };
  }) 
      
  return {
    props: { 
      projetos
    },
    revalidate: 60 * 60 * 24, //só executa 1 vezes por dia
  }
}