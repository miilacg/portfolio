import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: #007bff;
  box-shadow: 0px -10px 1vw 1px rgba(0, 0, 0, 0.2);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 13px;
  padding-bottom: 15px;
  color: var(--white);
  text-align: center;
  font-size: 1.13vw;

  z-index: 100;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const Direitos = styled.p`
  margin: 1.2vw 0vw 0.1vw 0vw;
  font-size: 1vw;
`;

export const Texto = styled.p`
  margin: .5vw 0vw;
`;

export const Link = styled.a`
  margin: .5vw 0vw;
  text-decoration: none;
`;

export const Span = styled.span`
  margin: 0vw .4vw;
  font-weight: bold;
`;