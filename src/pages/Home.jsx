import { About } from '../components/About';
import { Client } from '../components/Client';
import { Contacts } from '../components/Contact';
import { Counter } from '../components/Counter';
import { FAQs } from '../components/FAQs';
import { Gallery } from '../components/Gallery';
import { Hero } from '../components/Hero';
import { Mentors } from '../components/Mentors';
import { Team } from '../components/Team';
import { Services } from '../components/Services';
import { Tabs } from '../components/Tabs';
import { Testimonials } from '../components/Testimonials';


export const Home = () =>{
  return (
    <>
      <Hero />
      <main id="main">
        <Client />
        <About />
        <Counter />
        <Tabs />
        <Services />
        <Gallery />
        <Testimonials />
        <Team />
        <FAQs />
        <Mentors />
        <Contacts />
      </main>
    </>
  );
}

