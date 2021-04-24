import styles from '../styles/components/Footer.module.scss';

function Footer() {
  return (
    <div className={ styles.footerBase }>
      <p className={ styles.texto }>
        camiilacguimaraes@gmail.com 
        <span className={ styles.span }> · </span> 
        (31) 9.9176-2261
      </p>
      <p className={ styles.direitos }> © 2020 Todos os direitos reservados.</p>
    </div>
  );
}

export default Footer;