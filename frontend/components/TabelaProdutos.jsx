import React from "react";

const somarProdutos = (array) => {
  let resultado = 0;
  array.forEach((element) => {
    resultado += element.quantidade * element.precoUnit;
  });
  return resultado;
};

export default function TabelaProdutos({ listaProdutos = [] }) {
  return (
    <div className="table-responsive">
      <table className="table m-0">
        <tbody>
          <tr>
            <td colSpan="4" className="col-12 pt-3 pb-0 border-0 fw-bold">
              {"Detalhes:".toUpperCase()}
            </td>
          </tr>
          <tr>
            <td className="col-3 fw-bold notas-subtable-label">
              {"Quantidade (Kg)"}
            </td>
            <td className="col-3 fw-bold notas-subtable-label">{"Espécie"}</td>
            <td className="col-3 fw-bold notas-subtable-label">
              {"Preço Unitário (R$)"}
            </td>
            <td className="col-3 fw-bold notas-subtable-label">
              {"Preço Total (R$)"}
            </td>
          </tr>
          {listaProdutos.map((item) => {
            return (
              <tr key={item.id}>
                <td className="col-3 border-0 ">
                  {item.quantidade.toFixed(2)}
                </td>
                <td className="col-3 border-0 ">{item.especie}</td>
                <td className="col-3 border-0 ">{item.precoUnit.toFixed(2)}</td>
                <td className="col-3 border-0 ">
                  {(item.quantidade * item.precoUnit).toFixed(2)}
                </td>
              </tr>
            );
          })}
          <tr>
            <td className="col-3 border-0" colSpan={2}></td>
            <td className="col-3 border-0 border-top fw-bold">
              {"Total:".toUpperCase()}
            </td>
            <td className="col-3 border-0 border-top">
              {somarProdutos(listaProdutos).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
