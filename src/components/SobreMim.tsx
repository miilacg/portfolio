import styles from '../styles/components/SobreMim.module.css';

export default function SobreMim() {
   return (
      <div className={ styles.sobreMim }>            
         <div className={ styles.imagem }>
            <img src="../../imagens/camila.jpg"></img>
         </div>
         <div className={ styles.texto }>
            <h1>Olá</h1>
            <p>Tenho 24 anos, sou formada em Ciência da Computação pela UFV e apaixonada por tecnologia.</p>
            <p>Minha paixão pelo desenvolvimento web deu inicio quando comecei a implementar meu trabalho de conclusão de curso. Depois eu me especializei mais na área fazendo um curso de Front-end na Gama.</p>
            <p>Eu posso transformar seu negócio em um site, representando sua marca de maneira inteligente e um ótimo relacionamento com os clientes.&nbsp;</p>
            <p>Se você possui um negócio ou uma ideia, entre em contato, tenho certeza que podemos fazer algo incrível.</p>
         </div>
      </div>    
   )
}