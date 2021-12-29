// Cores
const cinza = 'rgb(246, 246, 246)';
const laranja = 'rgb(255, 142, 110)';
const roxo = 'rgb(81, 80, 112)'; 
const salmao = 'rgb(255, 187, 145)';
const text = 'rgb(61, 60, 60)';


// Tipografia
const caption = {
  margin: '0 0 .4rem 0', 

  textAlign: 'center',
  color: cinza,
  fontSize: '.8125rem',
};

const h1 = {
  display: 'flex',
  justifyContent: 'center',

  margin: '0 auto 4.3125rem',

  color: laranja,
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: '3rem',
  fontWeight: '700',
  letterSpacing: '0.05em'    
};

const h2 = {
  alignItems: 'center',

  margin: '0 auto 2.4375rem',

  textAlign: 'center',
  color: text,
  fontSize: '2.1875rem',
  fontWeight: '700',  
  letterSpacing: '0.05em'
};

const h3 = {
  margin: '0',

  textAlign: 'justify',
  color: text,
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: '1.5rem',
  fontWeight: '600',
  lineHeight: '1.3'  
};

const h5 = {
  margin: '0',

  textAlign: 'justify',
  color: text,
  fontSize: '1.125rem',
  lineHeight: '1.5'
};

const subtitle2 = {
  margin: '.9375rem 0 1.5625rem',

  color: roxo,
  fontSize: '.9375rem',
  lineHeight: '1.3' 
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




const primaryBlue = '#0071bb';
const primaryGreen = '#00b4c2';
const primaryGradient = `linear-gradient(to right, ${ primaryBlue } 0%, ${ primaryGreen } 100%)`;

// Cores relacionadas às dimensões
const dimAtores = '#f1667c';
const dimCultura = '#7e78b8';
const dimEstrutura = '#44c8f5';
const dimPoliticas = '#fbb040';
const dimRecursos = '#42c1c7';

const dimAtoresSuave = 'rgba(241,102,124,0.35)';
const dimCulturaSuave = 'rgba(126,120,184,0.35)';
const dimEstruturaSuave = 'rgba(68,200,245,0.35)';
const dimPoliticasSuave = 'rgba(251,176,64,0.35)';
const dimRecursosSuave = 'rgba(66,193,199,0.35)';

const dimGradient = `linear-gradient(to right, ${ dimAtores } 0%, ${ dimCultura } 25%, ${ dimEstrutura } 50%, ${ dimRecursos } 75%, ${ dimPoliticas } 100%)`;
const dimAngularGradient = `conic-gradient(${ dimAtoresSuave }, ${ dimCulturaSuave }, ${ dimEstruturaSuave }, ${ dimRecursosSuave }, ${ dimPoliticasSuave }, ${ dimAtoresSuave })`;

const errorColor = '#FF3858';

// Messages (Boilerplate)
const warningColor = '#ff9800';
const dangerColor = '#f55a4e';
const successColor = '#4caf50';
const infoColor = '#00acc1';
const textColorMessages = '#002e07';


// Sombras
const sombraCard = '0px 2px 4px rgba(0, 0, 0, 0.15)';
const sombraCardOnHover = '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)';



// Outros
const row = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
};

const fieldContainer = {
  flex: 1,
  padding: 4,
  paddingBottom: 0
};
 
 
export { 
  // Cores
  cinza,
  laranja,
  roxo,
  salmao,
  text,

  // Tipografia
  caption,
  h1,
  h2,
  h3,
  h5,
  subtitle2,

  // Outros
  link,

 




  //Paleta
  primaryBlue,
  primaryGreen,
  primaryGradient,
 
  dimAtores,
  dimCultura,
  dimEstrutura,
  dimPoliticas,
  dimRecursos,

  dimAtoresSuave,
  dimCulturaSuave,
  dimEstruturaSuave,
  dimPoliticasSuave,
  dimRecursosSuave,

  dimAngularGradient,
  dimGradient,

  errorColor,
 
  // messages
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  textColorMessages,

  // Sombras
  sombraCard,
  sombraCardOnHover,
 
  //Outros
  row,
  fieldContainer
}; 