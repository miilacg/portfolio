import TopicoCurriculo from '../components/TopicoCurriculo';
import styles from '../styles/pages/Curriculo.module.scss';

export default function Curriculo() {
  return (  
    <main className={ styles.mainCurriculo }>       
      <h1>Currículo</h1>

      <div className={ styles.cards }>
        <div className={ styles.card }>
          <h2>Experiência</h2>

          <TopicoCurriculo 
            subtitle="Desenvolvedora web front-end"
            date="2020 - atual  |  Atuspay"
            description="Desenvolvimento do front-end do sistema da empresa utilizando 
                         <strong> HTML</strong>, <strong> SCSS</strong> e <strong>JavaScript</strong>."
          />

          <TopicoCurriculo 
            subtitle="Iniciação cientifica voluntária" 
            date="2016 - 2017  |  Universidae Federal de Viçosa"
            description="Iniciação Cientifica realizada durante a graduação. A pesquisa foi na área de
                         <strong>sistema embarcados</strong> utilizando <strong>Arduíno</strong> e <strong>C#</strong>."
          />
        </div>

        <div className={ styles.card }>
          <h2>Educação</h2>
          <TopicoCurriculo 
            subtitle="Bacharel em Ciência da Computação"
            date="2015 - 2020  |  Universidade Federal de Viçosa"
            description="O curso de Ciência da Computação da UFV caracteriza-se pela sua natureza 
                         interdisciplinar incorporando conhecimentos de diversas áreas. <br /><br /> O Bacharel
                         em Ciência da Computação formado pela UFV possui sólida base de conhecimentos 
                         para enfrentar as frequentes inovações tecnológicas, produzidas pelo dinamismo 
                         dessa área. Profissionalmente, pode atuar em desenvolvimento de sistemas 
                         computacionais (software), gerência de centros de processamento de dados, 
                         desenvolvimento de linguagens de programação e sistemas básicos, assessoria 
                         à tomada de decisão e atividades correlatas. Disciplinas oferecidas 
                         nas áreas de Pesquisa Operacional e Administração possibilitam uma visão 
                         global das diversas aplicações da tecnologia da informação no meio empresarial."
          />

          <TopicoCurriculo 
            subtitle="Técnico em Eletrotécnica"
            date="2011 - 2016  |  Universidade Federal de Viçosa"
            description=" "
          />
        </div> 
      </div>      
    </main>                      
  );
}