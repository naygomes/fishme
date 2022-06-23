import React, { useState, useEffect } from "react";
import Pdf from "react-to-pdf";

// Componentes
import Layout from "../components/Layout";
import Botao from "../components/Botao";
import Input from "../components/Input";
import Chip from "../components/Chip";
import TabelaProdutos from "../components/TabelaProdutos";

const ref = React.createRef();

const options = {
  orientation: "landscape",
  unit: "in",
};

const somarProdutos = (array) => {
  let resultado = 0;
  array.forEach((element) => {
    resultado += element.quantidade * element.precoUnit;
  });
  return resultado;
};

const resultado = {
  cliente: "Joãozinho",
  data: "12/01/2019",
  numeroPedido: "00000000.01",
  estaPago: false,
  listaProdutos: [
    {
      id: 1,
      quantidade: 14,
      especie: "Corvina",
      precoUnit: 15,
    },
    {
      id: 2,
      quantidade: 14,
      especie: "Corvina",
      precoUnit: 15,
    },
    {
      id: 3,
      quantidade: 14,
      especie: "Corvina",
      precoUnit: 15,
    },
  ],
};

export default function Notas() {
  const [totalProdutos, setTotalProdutos] = useState(0);

  useEffect(() => {
    setTotalProdutos(somarProdutos(resultado.listaProdutos));
  }, []);

  return (
    <Layout title="Notas">
      <div className="notas d-flex flex-column justify-content-between align-items-center">
        <div className="card w-100 mb-5">
          <div className="card-body row justify-content-end">
            <div className="col-lg-5 col-sm-6 col-md-6">
              <Input
                htmlFor={"cliente"}
                label="Cliente: "
                required={true}
                type="text"
                id="cliente"
                placeholder="Nome do(a) cliente"
              />
            </div>
            <div className="col-lg-5 col-sm-6 col-md-6">
              <Input
                htmlFor={"data"}
                label="Data: "
                required={true}
                type="date"
                id="data"
                placeholder="dd/mm/aaaa"
              />
            </div>
            <div className="col-lg-2 col-sm-3 col-md-3 d-flex align-items-end mt-2">
              <Botao label="Pesquisar" color="primary" addClass="w-100" />
            </div>
          </div>
        </div>
        <div ref={ref} className="table-responsive w-100">
          <table className="table">
            <tbody>
              <tr>
                <th className="col-8" scope="row" colSpan="3">
                  {"Ceasa - Pescados".toUpperCase()}
                </th>
                <td className="col-4 text-end text-nowrap" colSpan="1">
                  <strong>{"Nº pedido: ".toUpperCase()}</strong>
                  {resultado.numeroPedido}
                </td>
              </tr>
              <tr>
                <td className="col-3 py-3">
                  <strong>{"Cliente: ".toUpperCase()}</strong>
                  {resultado.cliente}
                </td>
                <td className="col-6 py-3" colSpan="2">
                  <strong>{"Data: ".toUpperCase()}</strong>
                  {resultado.data}
                </td>
                <td className="col-3 py-3">
                  <div className="d-flex justify-content-end w-50">
                    <Chip
                      label={resultado.estaPago ? "Pago" : "Não pago"}
                      backgroundColor={
                        resultado.estaPago ? "success" : "danger"
                      }
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={4} className="col-12 p-0 border-0">
                  <TabelaProdutos
                    listaProdutos={resultado.listaProdutos}
                    totalProdutos={totalProdutos}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex flex-row justify-content-end w-100 mt-2">
          <Pdf
            targetRef={ref}
            filename="notas.pdf"
            options={options}
            x={0.5}
            y={0.5}
            scale={0.65}
          >
            {({ toPdf }) => (
              <Botao
                label="Exportar em PDF"
                typeButton="outline"
                color="primary"
                onClick={toPdf}
              />
            )}
          </Pdf>
        </div>
      </div>
    </Layout>
  );
}
