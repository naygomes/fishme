import React from 'react';
import Layout from '../components/Layout';
import Botao from '../components/Botao';
import Input from '../components/Input';
import Chip from '../components/Chip';

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
                            <Input htmlFor={'cliente'} label="Cliente: " required={true} type="text" id="cliente" placeholder="Nome do(a) cliente" />
                        </div>
                        <div className="col-5">
                            <Input htmlFor={'data'} label="Data: " required={true} type="date" id="data" placeholder="dd/mm/aaaa" />
                        </div>
                        <div className='col-2 d-flex align-items-end'>
                            <Botao label="Pesquisar" color="primary" addClass="w-100" />
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
                                <td className="col-4 py-3"><div className='d-flex justify-content-end'><Chip label="Não pago" backgroundColor="danger" /></div></td>
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
                            <tr>
                                <td className="col-3 border-0" colSpan={2}></td>
                                <td className="col-3 border-0 border-top fw-bold">{('Total:').toUpperCase()}</td>
                                <td className="col-3 border-0 border-top">{somarProdutos(listaProdutos).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='d-flex flex-row justify-content-end w-100 mt-2'>
                    <Botao label="Exportar" typeButton='outline' color="primary" />
                </div>
            </div>
        </Layout >
    )
}
