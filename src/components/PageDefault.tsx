import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function PageDefault({ children, href }){  
  return (  
    <>
      <Header href = { href }/>
      
      <main>
        { children }
      </main>

      <Footer />       
    </>        
  )
}