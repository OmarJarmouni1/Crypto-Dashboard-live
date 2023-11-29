import React from 'react'
import CoinSearch from '../components/CoinsSearch'

const Home = ({coins}) => {
  return (
    <div>
      <CoinSearch coins={coins} />
    </div>
  )
}

export default Home