import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import axios from 'axios';
import CoinPage from './routes/CoinsPage';


function App() {
  const [coins, setCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true';

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      // console.log(response.data)
    });
  }, [url]);

  return (
        <Routes>
          <Route path='/' element={<Home coins={coins} />} />
          <Route path='/coin/:coinId' element={<CoinPage />}>
            <Route path=':coinId' />
          </Route>
        </Routes>
  );
}

export default App;
