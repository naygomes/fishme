import React, { useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import Layout from "../components/Layout";
import Input from "../components/Input";
import Lixeira from "../components/icones/Lixeira";

export default function RegistrarDivida() {
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState({});
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

  const handleChange = (evt) => {
    const value = evt.target.value;
    const id = evt.target.id;
    const produtosList = Object.values(produtos);
    id === "especie" || id === "peso" || id === "preco"
      ? setNovoProduto({
          ...novoProduto,
          [evt.target.id]: value,
          _id:
            produtosList.length !== 0
              ? produtosList[produtosList.length - 1]?._id + 1
              : 0,
        })
      : setData({ ...data, [evt.target.id]: value });
  };

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

  const hitPost = (data) => {
    axios
      .post("", data)
      .then(function (response) {
        setSuccess(true);
        handleOpen();
      })
      .catch(function (error) {
        setSuccess(false);
        handleOpen(error);
      });
  };

  const handleSend = () => {
    const xData = { ...data, produtos: { ...produtos } };
    hitPost(xData);
  };

  const handleOpen = (error) => {
    setModalOpen(true);
    setMessage(error ? error.message : "Dívida registrada com sucesso!");
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Layout title="Registrar Dívida">
      <div className="container">
        <div className="row w-100">
          <div className="col-lg-6 col-sm-6 col-md-6">
            <Input
              handleChange={handleChange}
              value={data.cliente}
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
              handleChange={handleChange}
              value={data.data}
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

        <table className="table my-4 text-black-50">
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
        <div className="row ">
          <div className="col-lg-4 col-sm-4 col-md-4 mt-3">
            <Input
              handleChange={handleChange}
              value={data.valorpago}
              htmlFor={"valorpago"}
              label="Qual o valor que já foi pago pelo cliente?"
              required={true}
              type="text"
              id="valorpago"
            />
          </div>
        </div>
        <div className="d-flex flex-row justify-content-end w-100 mt-2">
          <button
            onClick={handleSend}
            type="button"
            className="btn btn-primary w-25"
          >
            Registrar
          </button>
        </div>
      </div>
      <Modal show={modalOpen} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{success ? "Sucesso" : "Erro"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
      </Modal>
    </Layout>
  );
}
