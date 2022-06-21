import React from "react";
import StatusTabela from "./StatusTabela";

function ItemTabela(props) {
  if (props.chave === "id") {
    return null;
  } else if (props.chave === "status") {
    return (
      <td>
        <StatusTabela status={props.item} />
      </td>
    );
  } else if (props.chave !== "cliente") {
    return <td>{props.item}</td>;
  }
}

export default ItemTabela;
