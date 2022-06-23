import React, { useState } from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";

export default function RegistrarDivida() {
  const [produtos, setProdutos] = useState([
    { peso: "14.00", especie: "Corvina", preco_unitario: "15.00" },
    { peso: "64.00", especie: "Sardinha", preco_unitario: "9.00" },
    { peso: "14.00", especie: "Dourado", preco_unitario: "20.00" },
  ]);

  return (
    <Layout title="Registrar Dívida">
      <div className="container">
        <div className="row w-100">
          <div className="col-lg-6 col-sm-6 col-md-6">
            <Input
              htmlFor={"cliente"}
              label="Cliente: "
              required={true}
              type="text"
              id="cliente"
              placeholder="Nome do cliente"
            />
          </div>

          <div className="col-lg-6 col-sm-6 col-md-6">
            <Input
              htmlFor={"data"}
              label="Data: "
              required={true}
              type="date"
              id="data"
              placeholder="dd/mm/aaaa"
            />
          </div>
        </div>
        <div className="border-bottom text-black-50 pb-2 mt-5 mb-3">
          Utilize os campos abaixo para adicionar os produtos relacionados à
          compra do cliente
        </div>

        <div className="row w-100 align-items-end">
          <div className="col-lg col-sm col-md">
            <Input
              htmlFor={"especie"}
              label="Espécie: "
              required={true}
              type="text"
              id="especie"
              placeholder="Nome da espécie"
            />
          </div>

          <div className="col-lg col-sm col-md">
            <Input
              htmlFor={"peso"}
              label="Peso (KG): "
              required={true}
              type="text"
              id="peso"
            />
          </div>

          <div className="col-lg col-sm col-md">
            <Input
              htmlFor={"preco"}
              label="Preço unitário (R$): "
              required={true}
              type="text"
              id="preco"
            />
          </div>

          <div className="col-lg-2 col-sm-2 col-md-2 h-100">
            <button type="button" className="btn btn-outline-primary w-100">
              Adicionar
            </button>
          </div>
        </div>

        <table className="table my-4 text-black-50">
          <thead>
            <tr>
              <th scope="col">Peso (Kg)</th>
              <th scope="col">Espécie</th>
              <th scope="col">Preço unitário (R$)</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((item, idx) => {
              return (
                <tr key={idx}>
                  {Object.values(item).map((xItem, index) => {
                    return <td key={index}>{xItem}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="row ">
          <div className="col-lg-4 col-sm-4 col-md-4 mt-3">
            <Input
              htmlFor={"valorpago"}
              label="Qual o valor que já foi pago pelo cliente?"
              required={true}
              type="text"
              id="valorpago"
            />
          </div>
        </div>
        <div className="d-flex flex-row justify-content-end w-100 mt-2">
          <button type="button" className="btn btn-primary w-25">
            Registrar
          </button>
        </div>
      </div>
    </Layout>
  );
}
