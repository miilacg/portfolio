import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--backgroundMenu);
  /*box-shadow: 0px -10px 1vw 1px rgba(0, 0, 0, 0.2);*/
  padding: 13px 16px 19px 16px;
  color: var(--white);
  text-align: center;
  font-size: 13px;

  z-index: 100;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Direitos = styled.p` 
  font-size: 13px;
  font-style: normal;
  letter-spacing: .02vw;
  color: #F6F6F6;
  margin: 0px;
`;

export const Texto = styled.p`
  margin: 0px 0vw 16px 0vw;
  font-size: 13px
  letter-spacing: .07vw;
  font-style: normal;
  font-weight: normal;  
  color: #F6F6F6;
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 13px;
  letter-spacing: .07vw;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  color: #F6F6F6;
`;

export const Span = styled.span`
  margin: 0vw 0.1vw 0vw .4vw;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4vw;
  letter-spacing: 0em;
  color: #F6F6F6;
`;