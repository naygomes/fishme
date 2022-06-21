import React from "react";

function StatusTabela(props) {
  return (
    <div className="chip">
      {props.status === 0
        ? "VENCIDO"
        : props.status === 1
        ? "À VENCER"
        : "NO PRAZO"}
    </div>
  );
}

export default StatusTabela;
