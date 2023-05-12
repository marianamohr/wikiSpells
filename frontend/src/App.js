import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Context from "./context/context";
import Feiticos from "./pages/Feiticos/Feiticos";
import Personagens from "./pages/Personagens/Personagens";

function App() {
  const [id, setId] = useState([]);
  const [personagens, setPersonagens] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Context.Provider value={{ id, setId, personagens, setPersonagens }}>
            <Route path="/personagens" component={Personagens} />
            <Route path="/feiticos" component={Feiticos} />
          </Context.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
