import React from 'react';
import Menu from '../Header';
/*import Apresentacao from '../Apresentacao';*/
import styled, { css } from 'styled-components';
import '../../../src/index.css';

const Main = styled.main`
  background-color: var(--backgroundPagina);
  color: var(--white);
  flex: 1;
  padding-top: var(--alturaLogo);
  padding-left: 9.2%;
  padding-right: 9.2%;
  
  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
`;

function PageDefault({ children, paddingAll, home, sobreMim, contato, projetos }){
      return (
         /*todo componente precisa ter uma estrutura em volta*/
         /*no react <> chama fragment (similar ao React.Fragment*/
         <>
            <Menu
               home={home}
               sobreMim={sobreMim} 
               contato={contato}   
               projetos={projetos}            
            />

            {/*<Apresentacao />*/}

            <Main paddingAll={paddingAll}>
               {children}
            </Main>      
         </>        
      )
}

export default PageDefault;