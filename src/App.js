import { Header } from "./Components/Header";
import { Description } from "./Components/Description";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { AboutMe } from "./Components/AboutMe";
import { Contact } from "./Components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        {/* <!-- hero section --> */}
        <div className="hero pb-5" id="hero">
          <Header></Header>
          <Description></Description>
        </div>

        {/* <!-- skills section --> */}
        <Skills></Skills>
        {/* <!-- projects section --> */}
        <Projects></Projects>
        {/* <!-- about me section --> */}
        <AboutMe></AboutMe>
        {/* <!-- contact me section --> */}
        <Contact></Contact>
        {/* <!-- footer section --> */}
      </div>
    </div>
  );
}

export default App;
