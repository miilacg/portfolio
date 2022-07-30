import Typography from '@mui/material/Typography';

import styles from '../styles/pages/SobreMim.module.scss';



export default function SobreMim() {
  return (
    <main className={ styles.sobreMim }>            
      <img src="../../imagens/camila.jpg"></img>
      
      <div className={ styles.texto }>
        <Typography variant='h1'>Olá</Typography>
        
        <Typography variant='body1'>
          Tenho 26 anos, sou formada em Ciência da Computação 
          pela UFV e apaixonada por tecnologia.
        </Typography>
        <Typography variant='body1'>
          Minha paixão pelo desenvolvimento web deu inicio quando comecei a 
          implementar meu trabalho de conclusão de curso. Depois eu me especializei 
          mais na área fazendo um curso de Front-end na Gama.
        </Typography>
        <Typography variant='body1'>
          Eu posso transformar seu negócio em um site, representando sua marca de 
          maneira inteligente e um ótimo relacionamento com os clientes.
        </Typography>
        <Typography variant='body1'>
          Se você possui um negócio ou uma ideia, entre em contato, tenho certeza 
          que podemos fazer algo incrível.
        </Typography>
      </div>
    </main> 
  )
}