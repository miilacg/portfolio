import React from 'react';
import Menu from '../Header';
/*import Apresentacao from '../Apresentacao';*/
import styled, { css } from 'styled-components';
import '../../../src/index.css';

const Main = styled.main`
  background-color: var(--white);
  color: var(--white);
  flex: 1;
  padding-top: 5.6vw;
  padding-left: 12%;
  padding-right: 12%;
  
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