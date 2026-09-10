import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Flow from './components/Flow';
import Plans from './components/Plans';
import Steps from './components/Steps';
import Results from './components/Results';
import Profile from './components/Profile';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <Features />
        <Flow />
        <Plans />
        <Steps />
        <Results />
        <Profile />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
