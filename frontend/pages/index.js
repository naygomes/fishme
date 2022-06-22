import { useState } from "react";
import Layout from "../components/Layout";
import Card from '../components/Card';
import TabelaResumo from "../components/TabelaResumo";

const resumoCobrancas = {
  1: {
    id: 1,
    label: "Valor total a pagar",
    value: 3345
  },
  2: {
    id: 2,
    label: "Valor pago pelos produtos",
    value: 3842
  },
  3: {
    id: 3,
    label: "Taxa e comissões",
    value: 335
  },
  4: {
    id: 4,
    label: "Carretos, fretes, gelo e outros",
    value: 145
  }
}

export default function VisaoGeral() {
  const [resumoCobrancas, setResumoCobrancas] = useState({
    1: {
      id: 1,
      label: "Valor total a pagar",
      value: 3345.93,
      color: ''
    },
    2: {
      id: 2,
      label: "Valor pago pelos produtos",
      value: 3842.93,
      color: 'danger'
    },
    3: {
      id: 3,
      label: "Taxa e comissões",
      value: 335.93,
      color: 'warning'
    },
    4: {
      id: 4,
      label: "Carretos, fretes, gelo e outros",
      value: 145.93,
      color: 'success'
    }
  })

  const setColorCobrancas = (id, color) => {
    let copia = { ...resumoCobrancas };
    copia[id].color = color;
    setResumoCobrancas(copia);
  }

  return <Layout title="Visão Geral">
    <div className='dashboard'>
      <div className='row w-100'>
        <div className='col-3'>
          <Card label="Saldo total" value={2543} dataType="currency" />
        </div>
        <div className='col-3'>
          <Card label="À cobrar" value={786.2} dataType="currency" color="primary" />

        </div>
        <div className='col-3'>
          <Card label="Clientes com Dívida" value={224} />

        </div>
        <div className='col-3'>
          <Card label="Quant. de espécies" value={231} />
        </div>
      </div>
      <div className="row w-100 mt-3">
        <div className="col-6">
          <TabelaResumo label="Pagamento aos fornecedores" data={resumoCobrancas} dataType="currency" />
        </div>
        <div className="col-6">
          <TabelaResumo label="Resumo das cobranças" data={resumoCobrancas} />
        </div>
      </div>
    </div>
  </Layout>;
}