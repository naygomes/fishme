import React, { Fragment } from "react";
import Layout from "../components/Layout";
import ItemTabela from "../components/ItemTabela";

export default function Cobranca() {
  const cobrancas = {
    0: {
      id: 0,
      num_compra: "00005689.95",
      cliente: "ABEL JUIZ DE FORA",
      emissao: "12/01/2021",
      vencimento: "12/02/2021",
      valor_total: "2.000,00",
      valor_pago: "0,00",
      valor_restante: "2.000,00",
      atraso: 35,
      status: 0,
    },
    1: {
      id: 1,
      num_compra: "00005689.95",
      cliente: "ABRAHÃO",
      emissao: "12/01/2021",
      vencimento: "12/02/2021",
      valor_total: "2.000,00",
      valor_pago: "0,00",
      valor_restante: "2.000,00",
      atraso: 27,
      status: 1,
    },
    2: {
      id: 2,
      num_compra: "00005689.95",
      cliente: "ANDERSON TROVÃO",
      emissao: "12/01/2021",
      vencimento: "12/02/2021",
      valor_total: "2.000,00",
      valor_pago: "0,00",
      valor_restante: "2.000,00",
      atraso: 27,
      status: 2,
    },
  };
  return (
    <Layout title={"Cobranças"}>
      {Object.values(cobrancas).map((cobranca, index) => {
        return (
          <Fragment key={index}>
            <p>Cliente: {cobranca.cliente}</p>
            <table className="table">
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
                <tr key={index}>
                  {Object.keys(cobranca).map((xKey, idx) => {
                    return (
                      <ItemTabela
                        item={cobranca[xKey]}
                        key={idx}
                        chave={xKey}
                      />
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </Fragment>
        );
      })}
    </Layout>
  );
}
