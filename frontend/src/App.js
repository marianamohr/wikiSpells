import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Context from "./context/context";
import Feiticos from "./pages/Feiticos/Feiticos";
import NovoPersonagem from "./pages/NovoPersonagem/NovoPersonagem";
import Personagens from "./pages/Personagens/Personagens";

function App() {
  const [id, setId] = useState([]);
  const [personagens, setPersonagens] = useState([]);
  const [feiticosPersonagem, setfeiticosPersonagem] = useState([]);
  const [listFeiticos, setFeiticos] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Context.Provider
            value={{
              id,
              setId,
              personagens,
              setPersonagens,
              feiticosPersonagem,
              setfeiticosPersonagem,
              listFeiticos,
              setFeiticos,
            }}
          >
            <Route path="/personagens" component={Personagens} />
            <Route path="/feiticos" component={Feiticos} />
            <Route path="/novoPersonagem" component={NovoPersonagem} />
          </Context.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
