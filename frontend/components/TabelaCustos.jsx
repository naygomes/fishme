import React from "react";

const labelCustos = {
  comissoes: "Comissões",
  taxas: "Taxas",
  carretos: "Carretos",
  frete: "Frete",
  gelo: "Gelo",
  outros: "Outros",
};

export default function TabelaCustos({ listaCustos = [], totalCustos = 0 }) {
  return (
    <div className="table-responsive">
      <table className="table m-0">
        <tbody>
          <tr>
            <td colSpan="4" className="col-12 pt-4 pb-0 border-0 fw-bold">
              {"Custos do(a) fornecedor(a):".toUpperCase()}
            </td>
          </tr>
          {Object.keys(listaCustos).map((item) => {
            return (
              <tr key={item}>
                <td
                  scope="row"
                  colSpan="3"
                  className="col-9 fw-bold subtable-label"
                >
                  {labelCustos[item] + " (R$)"}
                </td>
                <td className="col-3">
                  {listaCustos[item].toLocaleString("pt-br", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })}
                </td>
              </tr>
            );
          })}
          <tr>
            <td className="pt-3 col-6 border-0" colSpan={2}></td>
            <td className="pt-3 col-3 border-0 border-top fw-bold">
              {"Total Custos:".toUpperCase()}
            </td>
            <td className="pt-3 col-3 border-0 border-top">
              {totalCustos.toLocaleString("pt-br", {
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
