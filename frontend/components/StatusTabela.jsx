import React from "react";
import Chip from "./Chip";

function StatusTabela(props) {
  return (
    <Chip
      backgroundColor={
        props.status === 0
          ? "danger"
          : props.status === 1
          ? "warning"
          : "success"
      }
      label={
        props.status === 0
          ? "VENCIDO"
          : props.status === 1
          ? "À VENCER"
          : "NO PRAZO"
      }
    />
  );
}

export default StatusTabela;
