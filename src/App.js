import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FomularioCadastro";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Formulario</h1>
        <FormularioCadastro />
      </div>
    );
  }
}

export default App;
