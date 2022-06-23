import React, { Fragment, useState } from "react";
import Layout from "../components/Layout";
import ItemTabela from "../components/ItemTabela";
import Input from "../components/Input";
import { Modal, Button } from "react-bootstrap";

export default function Cobranca() {
  const [modalOpen, setModalOpen] = useState(false);
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

  const handleClick = (id) => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
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
                  <th scope="col">
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </th>
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
                  <td className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => handleClick(cobranca.id)}
                    >
                      Pagou?
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <Modal show={modalOpen} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>O cliente pagou?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Insira o valor pago:
                <div style={{ height: "16px" }}></div>
                <Input
                  htmlFor={"valorpago"}
                  label="Valor pago: "
                  required={true}
                  type="text"
                  id="valorpago"
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outlined" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Salvar
                </Button>
              </Modal.Footer>
            </Modal>
          </Fragment>
        );
      })}
    </Layout>
  );
}
