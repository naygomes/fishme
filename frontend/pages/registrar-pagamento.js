import React, { useState } from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";
import Lixeira from "../components/icones/Lixeira";

export default function RegistrarPagamento() {
  const [novoProduto, setNovoProduto] = useState({
    _id: null,
    especie: "",
    peso: "",
    preco: "",
  });
  const [produtos, setProdutos] = useState({
    0: { _id: 0, peso: "14.00", especie: "Corvina", preco_unitario: "15.00" },
    1: { _id: 1, peso: "64.00", especie: "Sardinha", preco_unitario: "9.00" },
    2: { _id: 2, peso: "14.00", especie: "Dourado", preco_unitario: "20.00" },
  });

  function handleChange(evt) {
    const value = evt.target.value;
    const produtosList = Object.values(produtos);
    setNovoProduto({
      ...novoProduto,
      [evt.target.id]: value,
      _id:
        produtosList.length !== 0
          ? produtosList[produtosList.length - 1]?._id + 1
          : 0,
    });
  }

  const handleAdd = () => {
    setProdutos({ ...produtos, [novoProduto._id]: novoProduto });
    setNovoProduto({
      _id: null,
      especie: "",
      peso: "",
      preco: "",
    });
  };

  const handleDelete = (id) => {
    let xProdutos = { ...produtos };
    delete xProdutos[id];
    setProdutos(xProdutos);
  };

  return (
    <Layout title="Registrar Pagamento ao Fornecedor">
      <div className="container">
        <div className="row w-100">
          <div className="col-lg-6 col-sm-6 col-md-6">
            <Input
              htmlFor={"fornecedor"}
              label="Fornecedor: "
              required={true}
              type="text"
              id="fornecedor"
              placeholder="Nome do fornecedor"
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
          Utilize os campos abaixo para adicionar os produtos relacionados ao
          pagamento
        </div>

        <div className="row w-100 align-items-end">
          <div className="col-lg col-sm col-md">
            <Input
              handleChange={handleChange}
              value={novoProduto.especie}
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
              handleChange={handleChange}
              value={novoProduto.peso}
              htmlFor={"peso"}
              label="Peso (KG): "
              required={true}
              type="text"
              id="peso"
            />
          </div>

          <div className="col-lg col-sm col-md">
            <Input
              handleChange={handleChange}
              value={novoProduto.preco}
              htmlFor={"preco"}
              label="Preço unitário (R$): "
              required={true}
              type="text"
              id="preco"
            />
          </div>

          <div className="col-lg-2 col-sm-2 col-md-2 h-100">
            <button
              onClick={handleAdd}
              type="button"
              className="btn btn-outline-primary w-100"
            >
              Adicionar
            </button>
          </div>
        </div>

        <table className="table mt-4 mb-5 text-black-50">
          <thead>
            <tr>
              <th scope="col">Peso (Kg)</th>
              <th scope="col">Espécie</th>
              <th scope="col">Preço unitário (R$)</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(produtos).map((item, idx) => {
              return (
                <tr key={idx}>
                  {Object.keys(item).map((xKey, index) => {
                    if (xKey !== "_id") {
                      return <td key={index}>{item[xKey]}</td>;
                    }
                  })}
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      type="button"
                      className="btn btn-danger btn-sm"
                    >
                      <span className="btn-label">
                        <Lixeira />
                      </span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="border-bottom text-black-50 pb-2 mt-5 mb-4">
          Utilize os campos abaixo para adicionar as despesas do fornecedor
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-4 col-md-4">
            <Input
              htmlFor={"comissoes"}
              label="Comissões (R$)"
              required={true}
              type="text"
              id="comissoes"
            />
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <Input
              htmlFor={"taxas"}
              label="Taxas (R$)"
              required={true}
              type="text"
              id="taxas"
            />
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <Input
              htmlFor={"carretos"}
              label="Carretos (R$)"
              required={true}
              type="text"
              id="carretos"
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-4 col-sm-4 col-md-4">
            <Input
              htmlFor={"frete"}
              label="Frete (R$)"
              required={true}
              type="text"
              id="frete"
            />
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <Input
              htmlFor={"gelo"}
              label="Gelo (R$)"
              required={true}
              type="text"
              id="gelo"
            />
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <Input
              htmlFor={"outros"}
              label="Outros (R$)"
              required={true}
              type="text"
              id="outros"
            />
          </div>
        </div>
        <div className="d-flex flex-row justify-content-end w-100 mt-4">
          <button type="button" className="btn btn-primary w-25">
            Registrar
          </button>
        </div>
      </div>
    </Layout>
  );
}
