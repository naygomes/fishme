import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Botao from '../components/Botao';
import Input from '../components/Input';
import Chip from '../components/Chip';
import TabelaProdutos from '../components/TabelaProdutos';
import TabelaCustos from '../components/TabelaCustos';

const somarProdutos = (array) => {
    let resultado = 0;
    array.forEach((element) => {
        resultado += element.quantidade * element.precoUnit;
    });
    return resultado;
};

const somarCustos = (array) => {
    let resultado = 0;
    array.forEach((element) => {
        resultado += element;
    });
    return resultado;
};

const resultado = {
    fornecedor: 'Joãozinho',
    data: '12/01/2018',
    listaProdutos: [
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
    ],
    listaCustos: {
        comissoes: 21,
        taxas: 10,
        carretos: 29,
        frete: 30,
        gelo: 15,
        outros: 25
    }
}

export default function RelatorioFornecedor() {
    const [totalProdutos, setTotalProdutos] = useState(0);
    const [totalCustos, setTotalCustos] = useState(0);

    useEffect(() => {
        setTotalCustos(somarCustos(Object.values(resultado.listaCustos)))
        setTotalProdutos(somarProdutos(resultado.listaProdutos))
    }, [])


    return (
        <Layout title="Relatório ao Fornecedor">
            <div className='notas d-flex flex-column justify-content-between align-items-center'>
                <div className="card w-100 mb-5">
                    <div className="card-body row justify-content-end">
                        <div className="col-lg-5 col-sm-6 col-md-6">
                            <Input htmlFor={'fornecedor'} label="fornecedor: " required={true} type="text" id="fornecedor" placeholder="Nome do(a) fornecedor(a)" />
                        </div>
                        <div className="col-lg-5 col-sm-6 col-md-6">
                            <Input htmlFor={'data'} label="Data: " required={true} type="date" id="data" placeholder="dd/mm/aaaa" />
                        </div>
                        <div className='col-lg-2 col-sm-3 col-md-3 d-flex align-items-end mt-2'>
                            <Botao label="Pesquisar" color="primary" addClass="w-100" />
                        </div>
                    </div>
                </div>
                <div className="table-responsive w-100">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="col-3 py-3"><strong>{('Fornecedor(a): ').toUpperCase()}</strong>{resultado.fornecedor}</td>
                                <td className="col-9 py-3" colSpan="3"><strong>{('Data: ').toUpperCase()}</strong>{resultado.data}</td>
                            </tr>
                            <tr>
                                <td colSpan={4} className="col-12 p-0 border-0">
                                    <TabelaProdutos listaProdutos={resultado.listaProdutos} totalProdutos={totalProdutos} />
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={4} className="col-12 p-0 border-0">
                                    <TabelaCustos listaCustos={resultado.listaCustos} totalCustos={totalCustos} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3" className="col-9 pt-5 pb-1 fw-bold">{('Valor total a pagar: ').toUpperCase()}</td>
                                <td className="col-3 pt-5 pb-1">{(totalProdutos - totalCustos).toLocaleString('pt-br', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                })}</td>

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
