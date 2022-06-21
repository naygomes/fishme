import React from "react";
import StatusTabela from "./StatusTabela";

function ItemTabela(props) {
  if (props.chave === "id") {
    return null;
  } else if (props.chave === "status") {
    return <StatusTabela status={props.item} />;
  } else {
    return <td>{props.item}</td>;
  }
}

export default ItemTabela;
