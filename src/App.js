import { About, Footer, Header, Skills, Testimonial, Projects } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Projects />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
