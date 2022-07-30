import Container from '@mui/material/Container';

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import styles from '../styles/components/Social.module.scss';



export default function Social() { 
  return (   
    <Container className={ styles.social }>
      <a href="https://linkedin.com/in/miilacg" target="_blank">
        <LinkedInIcon className={ styles.icon } />
      </a>
      
      <a href="https://github.com/miilacg" target="_blank">
        <GitHubIcon className={ styles.icon } />
      </a> 

      <a href="https://instagram.com/miilacg" target="_blank">
        <InstagramIcon className={ styles.icon } />
      </a>        
    </Container>
  );
}