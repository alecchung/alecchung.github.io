import { Footer, Header, Skills, Projects } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <Projects />
    <Skills />
    <Footer />
  </div>
);

export default App;
