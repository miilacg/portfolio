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
  fontWeight: '400'
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
const primaryGradientOnHover = `linear-gradient(to left, ${ primaryBlue } 0%, ${ primaryGreen } 100%)`;
  
// Cores de elementos e superfícies
const backgroundColor = '#f2f2f2';

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
const sombraSuperficie = '1px 3px 12px rgba(0, 0, 0, 0.15)';



// Outros
const fabContainer = {
  position: 'fixed',
  bottom: 30,
  right: 30,
};

const formGroup = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 'none',
};

const row = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
};

const form = {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 20,
  marginBottom: 40,
  paddingBottom: 100,
};

const logo = {
  maxWidth: 100,
};

const column = {
  flex: 0.5
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

  // Outros
  link,

 




  //Paleta
  primaryBlue,
  primaryGreen,
  primaryGradient,
  primaryGradientOnHover,

  backgroundColor,
 
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
  sombraSuperficie,
 
  //Outros
  fabContainer,
  row,
  column,
  form,
  logo,
  formGroup,
  fieldContainer
}; 