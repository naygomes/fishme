import React from 'react';
import Layout from '../components/Layout';

export default function Notas() {
    return (
        <Layout title="Notas">
            <div className='notas d-flex flex-column justify-content-between align-items-center'>
                <div className="card w-100">
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
            </div>
        </Layout>
    )
}
