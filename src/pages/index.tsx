import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SobreMim from '../components/SobreMim';

export default function Home() {
  return (
    <>
      <Header />

      <SobreMim />

      { /*<main className={ styles.main }>
        {children}
      </main> */}
    
      <Footer />          
    </>        
  );
}