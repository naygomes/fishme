import React from "react";

export default function TabelaProdutos({
  listaProdutos = [],
  totalProdutos = 0,
}) {
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
            <td className="col-3 fw-bold subtable-label">
              {"Quantidade (Kg)"}
            </td>
            <td className="col-3 fw-bold subtable-label">{"Espécie"}</td>
            <td className="col-3 fw-bold subtable-label">
              {"Preço Unitário (R$)"}
            </td>
            <td className="col-3 fw-bold subtable-label">
              {"Preço Total (R$)"}
            </td>
          </tr>
          {listaProdutos.map((item) => {
            return (
              <tr key={item.id}>
                <td className="col-3 border-0 ">
                  {item.quantidade.toLocaleString("pt-br", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })}
                </td>
                <td className="col-3 border-0 ">{item.especie}</td>
                <td className="col-3 border-0 ">
                  {item.precoUnit.toLocaleString("pt-br", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })}
                </td>
                <td className="col-3 border-0 ">
                  {(item.quantidade * item.precoUnit).toLocaleString("pt-br", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })}
                </td>
              </tr>
            );
          })}
          <tr>
            <td className="pt-3 col-3 border-0" colSpan={2}></td>
            <td className="pt-3 col-3 border-0 border-top fw-bold">
              {"Total Produtos:".toUpperCase()}
            </td>
            <td className="pt-3 col-3 border-0 border-top">
              {totalProdutos.toLocaleString("pt-br", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
