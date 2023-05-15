import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/context";
import api from "../../utils/api";
import "./feiticos.css";

function Feiticos() {
  const history = useHistory();
  const {
    id,
    feiticosPersonagem,
    setfeiticosPersonagem,
    listFeiticos,
    setFeiticos,
  } = useContext(Context);
  const [novoFeiticostatus, setnovoFeiticoStatus] = useState(false);
  const [novoFeitico, setnovoFeitico] = useState({});

  useEffect(() => {
    api.get(`/feiticos/${id}`).then((response) => {
      setfeiticosPersonagem(response.data);
    });
  }, []);

  const handleClickNovofeitico = () => {
    setnovoFeiticoStatus(!novoFeiticostatus);
    api.get(`/feiticos`).then((response) => {
      setFeiticos(response.data);
    });

    console.log(listFeiticos);
  };

  const handleChange = (e) => {
    setnovoFeitico(e.target.value);
  };

  return (
    <div className="container">
      <h1>Feitiços</h1>
      <table className="flex-table">
        <tr>
          <th className="flex-cell">Nome</th>
          <th className="flex-cell">Feitiço</th>
          <th className="flex-cell">Data</th>
        </tr>

        {feiticosPersonagem.map((fp) => (
          <tr>
            <td className="flex-cell">{fp.nome}</td>
            <td className="flex-cell">{fp.feitico}</td>
            <td className="flex-cell">
              {moment(fp.data).format("DD/MM/YYYY HH:mm")}
            </td>
          </tr>
        ))}
      </table>
      <button
        type="button"
        className="novo-feitico"
        onClick={() => handleClickNovofeitico()}
      >
        Novo feitiço
      </button>
      {novoFeiticostatus ? (
        <div className="div-novo-feitico">
          <form
            onSubmit={(e) => {
              console.log(novoFeitico);
              e.preventDefault();
              api.post("/feiticos", { id, novoFeitico }).then((response) => {
                history.push("/personagens");
              });
            }}
          >
            <select value={novoFeitico} onChange={handleChange}>
              {listFeiticos.map((f) => (
                <option value={f.id}>{f.nome}</option>
              ))}
            </select>
            <button type="sumit" className="add-feitico">
              Adicionar
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Feiticos;
