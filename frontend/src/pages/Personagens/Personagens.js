import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/context";
import api from "../../utils/api";
import "./personagem.css";

function Personagens() {
  const history = useHistory();
  const { setId, personagens, setPersonagens } = useContext(Context);

  useEffect(() => {
    api.get("/personagens").then((response) => {
      setPersonagens(response.data);
    });
    // eslint-disable-next-line
  }, []);

  const handleClick = (id) => {
    setId(id);
    history.push("/feiticos");
  };

  const handleClickEdit = (id) => {
    setId(id);
    api.delete(`/personagens/${id}`).then((response) => {
      api.get("/personagens").then((response) => {
        setPersonagens(response.data);
      });
    });
    history.push("/personagens");
  };

  const handleClickNovoPersonagem = (id) => {
    setId(id);
    history.push("/novoPersonagem");
  };

  return (
    <div className="flex-container">
      <div className="itens">
        <h1>Personagens</h1>
        <div className="flex-container">
          {personagens.map((p) => (
            <div className="card">
              <div className="dados">
                <div className="nome">{p.nome}</div>
                <div className="casa">{p.casa}</div>
              </div>
              <button
                type="button"
                className="btn"
                onClick={() => handleClick(p.id)}
              >
                Feitiços
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => handleClickEdit(p.id)}
              >
                Deletar
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="novo-personagem"
          onClick={() => handleClickNovoPersonagem()}
        >
          Novo Personagem
        </button>
      </div>
    </div>
  );
}

export default Personagens;
