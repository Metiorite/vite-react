import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import OpenSource from './components/OpenSource';
import BlogPreview from './components/BlogPreview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Solutions />
      <OpenSource />
      <BlogPreview />
      <Footer />
    </div>
  );
}

export default App;
