import React, { useState } from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";

export default function RegistrarPagamento() {

  const [relFornecedor, setRelFornecedor] = useState({
      fornecedorName: "",
      produtos: {},
      valorTotalVendido: 0,
      comissao: 0,
      taxa: 0,
      carreto: 0,
      frete: 0,
      outros: 0,
      totalAPagar:0
    }
  )

  const handleRegister = e => {
    console.log(relFornecedor);
  }

  const handleInputChange = e => {
    console.log(e.target.name);
    setRelFornecedor({ [e.target.name]: e.target.value });
  };

  const addProduto = e => {
    let peso = document.getElementById("peso").value;
    let nome = document.getElementById("especie").value;
    let preco = document.getElementById("preco").value;

    let novoProduto = { quantidade:peso, name:nome, precoUnit:preco};
    setProdutos([...produtos, novoProduto]);
  }

  const [produtos, setProdutos] = useState([
    { quantidade: "14.00", name: "Corvina", precoUnit: "15.00" },
    { quantidade: "64.00", name: "Sardinha", precoUnit: "9.00" },
    { quantidade: "14.00", name: "Dourado", precoUnit: "20.00" },
  ]);

  return (
    <Layout title="Registrar Pagamento ao Fornecedor">
      <div className="container">
        <div className="row w-100">
          <div className="col-lg-6 col-sm-6 col-md-6">
            <Input
              //onChange={e => handleInputChange(e)}
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
              //onChange={e => handleInputChange(e)}
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
              htmlFor={"peso"}
              label="Peso (KG): "
              required={true}
              type="text"
              id="peso"
            />
          </div>

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
              htmlFor={"preco"}
              label="Preço unitário (R$): "
              required={true}
              type="text"
              id="preco"
            />
          </div>

          <div className="col-lg-2 col-sm-2 col-md-2 h-100">
            <button type="button" className="btn btn-outline-primary w-100" onClick={e => addProduto(e)}>
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

        <div className="border-bottom text-black-50 pb-2 mt-5 mb-4">
          Utilize os campos abaixo para adicionar as despesas do fornecedor
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-4 col-md-4">
            <Input
              onChange={e => handleInputChange(e)}
              htmlFor={"comissoes"}
              label="Comissões (R$)"
              required={true}
              type="text"
              id="comissao"
            />
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <Input
              onChange={e => handleInputChange(e)}
              htmlFor={"taxas"}
              label="Taxas (R$)"
              required={true}
              type="text"
              id="taxa"
            />
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <Input
              onChange={e => handleInputChange(e)}
              htmlFor={"carretos"}
              label="Carretos (R$)"
              required={true}
              type="text"
              id="carreto"
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-4 col-sm-4 col-md-4">
            <Input
              onChange={e => handleInputChange(e)}
              htmlFor={"frete"}
              label="Frete (R$)"
              required={true}
              type="text"
              id="frete"
            />
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <Input
              onChange={e => handleInputChange(e)}
              htmlFor={"gelo"}
              label="Gelo (R$)"
              required={true}
              type="text"
              id="gelo"
            />
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <Input
              onChange={e => handleInputChange(e)}
              htmlFor={"outros"}
              label="Outros (R$)"
              required={true}
              type="text"
              id="outros"
            />
          </div>
        </div>
        <div className="d-flex flex-row justify-content-end w-100 mt-4">
          <button type="button" className="btn btn-primary w-25" onClick={(e) => handleRegister(e)}>
            Registrar
          </button>
        </div>
      </div>
    </Layout>
  );
}
