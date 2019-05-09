import Layout from '../components/Layout';
import Prices from '../components/Prices';
import TabsHolder from '../components/TabsHolder';

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to Next App Homepage</h1>
      <p>Check current Bitcoin rate</p>
      <Prices bpi = {props.bpi}/>
      <div className = ''><br/></div>
      <TabsHolder exc = {props.exc} />
    </div>
  </Layout>
);

Index.getInitialProps = async function(){
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  const excRes = await fetch('https://api.exchangeratesapi.io/latest');
  const dataExc = await excRes.json();
  return {
    bpi: data.bpi,
    exc: dataExc
  }
}

export default Index;


//<ExchangeCurrent exc = {props.exc}/>
