import React from "react";
import Layout from "../components/Layout";

export default function Cobranca() {
  const cobrancas = {
    1: {
      id: "00005689.95",
      emissao: "12/01/2021",
      vencimento: "12/02/2021",
      valor_total: "2.000,00",
      valor_pago: "0,00",
      valor_restante: "2.000,00",
      atraso: 35,
    },
  };
  return (
    <Layout title={"Cobranças"}>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nº Compra</th>
            <th scope="col">Emissão</th>
            <th scope="col">Vencimento</th>
            <th scope="col">Valor Total (R$)</th>
            <th scope="col">Valor Pago (R$)</th>
            <th scope="col">Valor Restante (R$)</th>
            <th scope="col">Dias de atraso</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>00005689.95</td>
            <td>12/01/2021</td>
            <td>12/02/2021</td>
            <td>2.000,00</td>
            <td>0,00</td>
            <td>2.000,00</td>
            <td>35</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}
