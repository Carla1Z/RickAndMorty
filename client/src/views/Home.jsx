import { Link } from "react-router-dom";
import Characters from "../components/Characters";
import Nav from "../components/Nav";

function Home() {
  return (
    <div>
      <Nav />
      <Link to="/form">
        <button>Formulario</button>
      </Link>
      Hola soy la home
      <Characters />
    </div>
  );
}

export default Home;
