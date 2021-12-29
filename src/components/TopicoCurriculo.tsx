import Typography from '@mui/material/Typography';

import styles from '../styles/components/TopicoCurriculo.module.scss';

type Topico = { 
  subtitle: string;
  date: string;
  description: string;
} 

export default function TopicoCurriculo({ subtitle, date, description }: Topico) {
  return (
    <div className={ styles.topico }>
      <Typography variant='h3'>{ subtitle }</Typography>

      <Typography variant='subtitle2'> 
        <i className="far fa-calendar-alt"></i>
        { date }
      </Typography>
      
      <Typography variant='h5' dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}