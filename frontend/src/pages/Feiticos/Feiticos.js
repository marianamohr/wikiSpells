import React, { useContext, useEffect } from "react";
import Context from "../../context/context";
import api from "../../utils/api";
//import "./feiticos.css";

function Feiticos() {
  const { id } = useContext(Context);

  useEffect(() => {
    console.log(id);
  }, [id]);
  useEffect(() => {
    api.get("/personagens").then((response) => {});
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex-container">
      <div className="itens">
        <p>Feitiços</p>
        {id}
      </div>
    </div>
  );
}

export default Feiticos;
