import React from 'react';
import Layout from '../components/Layout';

const listaProdutos = [
    {
        id: 1,
        quantidade: 14,
        especie: 'Corvina',
        precoUnit: 15,
    },
    {
        id: 2,
        quantidade: 14,
        especie: 'Corvina',
        precoUnit: 15,
    },
    {
        id: 3,
        quantidade: 14,
        especie: 'Corvina',
        precoUnit: 15,
    },
]

const somarProdutos = (array) => {
    let resultado = 0;
    array.forEach(element => {
        resultado += element.quantidade * element.precoUnit;
    });
    return resultado;
}

export default function Notas() {
    return (
        <Layout title="Notas">
            <div className='notas d-flex flex-column justify-content-between align-items-center'>
                <div className="card w-100 mb-5">
                    <div className="card-body row justify-content-end">
                        <div className="col-5">
                            <label htmlFor="cliente" className="form-label">{('Cliente: *').toUpperCase()}</label>
                            <input type="text" className="form-control" id="cliente" placeholder="Nome da Cliente" />
                        </div>
                        <div className="col-5">
                            <label htmlFor="data" className="form-label">{('Data: *').toUpperCase()}</label>
                            <input type="date" className="form-control" id="data" placeholder="dd/mm/aaaa" />
                        </div>
                        <div className='col-2 d-flex align-items-end'>
                            <button type="button" className="btn btn-primary w-100">Pesquisar</button>
                        </div>
                    </div>
                </div>
                <div className="table-responsive w-100">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th className="col-8" scope="row" colSpan="3">{('Ceasa - Pescados').toUpperCase()}</th>
                                <td className="col-4 text-end" colSpan="1"><strong>{('Nº pedido: ').toUpperCase()}</strong>{'00000000.01'}</td>
                            </tr>
                            <tr>
                                <td className="col-3 py-3"><strong>{('Cliente: ').toUpperCase()}</strong>{'Joãozinho'}</td>
                                <td className="col-4 py-3" colSpan="2"><strong>{('Data: ').toUpperCase()}</strong>{'02/12/2009'}</td>
                                <td className="col-4 py-3"><div className='d-flex justify-content-end text-light'><div className="bg-danger p-1 px-2 fw-bold nota-chip-status rounded-pill">{('Não Pago').toUpperCase()}</div></div></td>
                            </tr>
                            <tr>
                                <td className="col-4 py-3 border-0 fw-bold">{('Detalhes da Compra:').toUpperCase()}</td>
                            </tr>
                            <tr>
                                <td className="col-3 fw-bold notas-subtable-label">{'Quantidade (Kg)'}</td>
                                <td className="col-3 fw-bold notas-subtable-label">{'Espécie'}</td>
                                <td className="col-3 fw-bold notas-subtable-label">{'Preço Unitário (R$)'}</td>
                                <td className="col-3 fw-bold notas-subtable-label">{'Preço Total (R$)'}</td>
                            </tr>
                            {listaProdutos.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td className="col-3 border-0 ">{item.quantidade.toFixed(2)}</td>
                                        <td className="col-3 border-0 ">{item.especie}</td>
                                        <td className="col-3 border-0 ">{item.precoUnit.toFixed(2)}</td>
                                        <td className="col-3 border-0 ">{(item.quantidade * item.precoUnit).toFixed(2)}</td>
                                    </tr>
                                )
                            })}
                            <br />
                            <tr>
                                <td className="col-3 border-0 border-top" colSpan={2}></td>
                                <td className="col-3 border-0 border-top fw-bold">{('Total:').toUpperCase()}</td>
                                <td className="col-3 border-0 border-top">{somarProdutos(listaProdutos).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}
