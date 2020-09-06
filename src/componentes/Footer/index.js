import React from 'react';
import { FooterBase, Texto, Direitos, Link, Span } from './styles';

function Footer() {
  return (
    <FooterBase>
      <Texto>camiilacguimaraes@gmail.com <Span> · </Span> <Link href="https://api.whatsapp.com/send?phone=5531991762261" target="_blank">(31) 9.9176-2261</Link></Texto>
      <Direitos>© 2020 Todos os direitos reservados.</Direitos>
    </FooterBase>
  );
}

export default Footer;
