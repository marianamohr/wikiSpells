import React, { useContext, useState } from "react";
import Context from "../../context/context";
import "./feiticos.css";

function Feiticos() {
  const {
    id,
    feiticosPersonagem,
    setfeiticosPersonagem,
    listFeiticos,
    setFeiticos,
  } = useContext(Context);
  const [novoFeiticostatus, setnovoFeiticoStatus] = useState(false);
  const [novoFeitico, setnovoFeitico] = useState({});

  return (
    <dheader className="flex-container">
      <h1> Ministério da Magia</h1>
    </dheader>
  );
}

export default Feiticos;
