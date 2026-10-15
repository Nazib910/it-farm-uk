import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FacebookAds from './components/FacebookAds.jsx';
import Services from './components/Services.jsx';
import ScriptShop from './components/ScriptShop.jsx';
import Process from './components/Process.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // A new object on every "Ask about this" click, so the form reacts each time.
  const [request, setRequest] = useState(null);

  function askAbout(scriptName) {
    setRequest({ service: 'Ready-made script', detail: scriptName, id: Date.now() });
    document.getElementById('contact')?.scrollIntoView();
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <FacebookAds />
        <Services />
        <ScriptShop onAsk={askAbout} />
        <Process />
        <Contact request={request} />
      </main>
      <Footer />
    </>
  );
}
