
import './assets/css/App.css';

//  Importar componentes
import Presentacion from './components/Presentacion';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header"><Logo/><Presentacion/><Nav/></header>
      <article className="article">
            <section className="AboutMe"><AboutMe/></section>
            <section className="Skills"><Skills/></section>
            <section className="Tools"><Tools/></section>
      </article>
      <aside className="Aside"><Aside/></aside>
      <footer className="Footer"><Footer/></footer>
    </div>
    
  )
}

export default App;
