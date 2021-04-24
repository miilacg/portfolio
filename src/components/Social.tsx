import styles from '../styles/components/Social.module.scss';

export default function Social() { 
  return (   
    <div className={ styles.social }>
      <a className={ styles.icon } href="https://linkedin.com/in/miilacg" >
        <i className="fab fa-linkedin"></i>
      </a>
      
      <a className={ styles.icon } href="https://github.com/miilacg" >
        <i className="fab fa-github"></i>
      </a> 

      <a className={ styles.icon } href="https://instagram.com/miilacg" >
        <i className="fab fa-instagram"></i>
      </a>        
    </div>
  );
}