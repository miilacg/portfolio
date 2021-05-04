import styles from '../styles/components/TopicoCurriculo.module.scss';

type Topico = { 
  subtitle: string;
  date: string;
  description: string;
} 

export default function TopicoCurriculo({ subtitle, date, description }: Topico) {
  return (
    <div className={ styles.topico }>
      <h3>{ subtitle }</h3>
      <p> 
        <i className="far fa-calendar-alt"></i>
        { date }
      </p>
      <h5 dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}