import { useEffect, useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import { getApiExchange } from './api';
import { Exchange } from './components/Exchange/Exchange';
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';

function App() {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    getApiExchange().then(data => {
      setCurrency([{ "cc": "UAH", "rate": 1 }, ...data])
    });
  }, []);


  return (
    <div className="App">
      <Header currency={currency} />

      <main className="columns">
        <div className="column is-one-quarter">
        {currency.length > 0 ? 
          (<Exchange currency={currency} />) : 
          (<div className="loader is-loading is-danger" />)
        }
          
        </div>
        <div className="column">
          <Content />
        </div>
        <div className="column is-one-fifth">
          <Content />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
