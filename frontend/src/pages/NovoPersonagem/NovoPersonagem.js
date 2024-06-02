import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/context";
import api from "../../utils/api";
import "./novoPersonagem.css";

function Personagens() {
  const history = useHistory();
  const { setId, personagens, setPersonagens } = useContext(Context);
  const [nome, setNome] = useState("");
  const [casa_id, setCasa] = useState("");

  const handleChangeNome = (e) => {
    setNome(e.target.value);
  };
  const handleChange = (e) => {
    setCasa(e.target.value);
  };

  return (
    <div className="flex-container">
      <div className="itens">
        <h1>Personagens</h1>
        <form
          onSubmit={(e) => {
            console.log(nome, casa_id);
            e.preventDefault();
            api.post("/personagens", { nome, casa_id }).then((response) => {
              history.push("/personagens");
            });
          }}
        >
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={handleChangeNome}
          />
          <select value={casa_id} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="1">Gryffindor</option>
            <option value="2">Hufflepuff</option>
            <option value="3">Ravenclaw</option>
            <option value="4">Slytherin</option>
          </select>
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default Personagens;
