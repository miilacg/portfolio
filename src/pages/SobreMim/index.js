import React from 'react';
import PageDefault from '../../componentes/PageDefault';
import camila from '../../imagens/camila.jpg';
import './sobreMim.css'
import Apresentacao from '../../componentes/Apresentacao';
import Footer from '../../componentes/Footer';

function SobreMim(){/*iniciar todo componente com letra maiuscula*/
   return (
      <>
         <PageDefault home={"/"} sobreMim={"#"} contato={"/contato"} projetos={"#"}>                  
            <div className="sobreMim">            
               <div className="imagem">
                  <img src={ camila }></img>
               </div>
               <div className="texto">
                  <Apresentacao /> 
                  <p className="primeiro">Tenho 24 anos, sou estudante de Ciência da Computação na UFV e apaixonada por tecnologia.</p>
                  <p>Minha paixão pelo desenvolvimento web começou quando comecei a implementar meu trabalho de conclusão de curso. Depois eu me especializei mais na área fazendo um curso de Front-end na Gama.</p>
                  <p>Eu posso transformar seu<strong> </strong>negócio em um site, representando sua marca de maneira inteligente e um ótimo relacionamento com os clientes.&nbsp;</p>
                  <p className="ultimo">Se você possui um negócio ou uma ideia, entre em contato, tenho certeza que podemos fazer algo incrível.</p>
               </div>
            </div>         
         </PageDefault>
         <Footer />
      </>
   );
}

export default SobreMim; 