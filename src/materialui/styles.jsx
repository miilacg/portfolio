// Cores
const cinza = 'rgb(246, 246, 246)';
const errorColor = 'rgba(255, 56, 88, 1)';
const laranja = 'rgb(255, 142, 110)';
const roxo = 'rgb(81, 80, 112)'; 
const salmao = 'rgb(255, 187, 145)';
const text = 'rgb(61, 60, 60)';


// Tipografia
const body1 = {  
  display: 'flex',
  alignItems: 'center',

  marginBottom: '.8125rem',
   
  textAlign: 'justify',

  fontFamily: "'IBM Plex Sans', sans-serif",
  color: text,
  fontSize: '1.25rem',

  '@media (max-width:500px)': {
    fontSize: '1rem'
  },  
};

const caption = {
  margin: '0 0 .4rem 0', 

  textAlign: 'center',
  color: cinza,
  fontSize: '.8125rem',

  '@media (max-width:600px)': {
    margin: '0 0 .2rem 0', 
    fontSize: '.625rem'
  },
};

const h1 = {
  display: 'flex',
  justifyContent: 'center',

  margin: '0 auto 4.3125rem',

  color: laranja,
  textAlign: 'center',
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: '3rem',
  fontWeight: '700',
  letterSpacing: '0.05em',

  '@media (max-width: 500px)': {
    margin: '0 auto 1.2rem',
    fontSize: '1.8rem'
  }
};

const h2 = {
  alignItems: 'center',

  margin: '0 auto 2.4375rem',

  fontFamily: "'IBM Plex Sans', sans-serif",
  textAlign: 'center',
  color: text,
  fontSize: '2.1875rem',
  fontWeight: '700',  
  letterSpacing: '0.05em',

  '@media (max-width: 500px)': {
    fontSize: '1.7rem'
  }
};

const h3 = {
  margin: '0',

  textAlign: 'justify',
  color: text,
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: '1.5rem',
  fontWeight: '600',
  lineHeight: '1.3',

  '@media (max-width: 500px)': {
    fontSize: '1.125rem'
  }
};

const h5 = {
  margin: '0',

  textAlign: 'justify',
  color: text,
  fontSize: '1.125rem',
  lineHeight: '1.5',

  '@media (max-width: 500px)': {
    fontSize: '.9rem',
    lineHeight: '1.8'
  }
};

const subtitle2 = {
  margin: '.9375rem 0 1.5625rem',

  fontFamily: "'IBM Plex Sans', sans-serif",
  color: roxo,
  fontSize: '.9375rem',
  lineHeight: '1.3', 
  fontWeight: '400',
  letterSpacing: '0.03em',

  '@media (max-width: 500px)': {
    margin: '.9rem 0 1rem',
    fontSize: '.75rem'
  }
};


// Outros
const link = {
  margin: '0 .46875rem', 

  fontFamily: "'Roboto', sans-serif",
  color: cinza,
  fontSize: '1.05rem',
  fontWeight: 500,

  border: 'none',
  cursor: 'pointer'
};


// Messages
const warningColor = '#ff9800';
const dangerColor = '#f55a4e';
const successColor = '#4caf50';
const infoColor = '#00acc1';
const textColorMessages = '#002e07';


 
export { 
  // Cores
  cinza,
  errorColor,
  laranja,
  roxo,
  salmao,
  text,

  // Tipografia
  body1,
  caption,
  h1,
  h2,
  h3,
  h5,
  subtitle2,

  // Outros
  link,
 
  // messages
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  textColorMessages,
}; 