import Typography from '@mui/material/Typography';

import styles from '../styles/pages/SobreMim.module.scss';



export default function SobreMim() {
  return (
    <main className={ styles.sobreMim }>            
      <img src="../../imagens/camila.jpg"></img>
      
      <div className={ styles.texto }>
        <Typography variant='h1'>Olá</Typography>
        
        <Typography variant='body1'>
          Tenho 27 anos, sou formada em Ciência da Computação 
          pela UFV, pós graduanda em Engenharia de Software pela PUC Minas
          e atualmente trabalho como analista de sistema na Dr. TIS.
        </Typography>
        <Typography variant='body1'>
          Minha paixão pelo desenvolvimento web deu inicio quando comecei a 
          implementar meu trabalho de conclusão de curso. Depois eu me especializei 
          mais na área fazendo um curso de Front-end na Gama e a pós graduação.
        </Typography>
      </div>
    </main> 
  )
}