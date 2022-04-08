import "../src/normalize.css"
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Proyects } from "./components/Proyects";

function App() {
  return (
    <div className="app">
      <Header/>
      <AboutMe/>
      <Proyects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
