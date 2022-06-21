import Layout from "../components/Layout";
// import Card from '../components/Card';
import Card from '../components/Card';

export default function VisaoGeral() {
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
    </div>
  </Layout>;
}