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
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const Direitos = styled.p`
  margin: 2vw 0vw 1vw 0vw;
`;

export const Texto = styled.p`
  margin: .5vw 0vw;
`;

