import Head from 'next/head';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Projects from '@/components/home/Projects';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Morphis Studio | Luxury Interior Design & Architecture</title>
        <meta name="description" content="Morphis Studio creates timeless, functional, and deeply personal spaces." />
      </Head>

      <div className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
}
