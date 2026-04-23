import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloating from './WhatsAppFloating';
import CustomCursor from './CustomCursor';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useScrollReveal();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
