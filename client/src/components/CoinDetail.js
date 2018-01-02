import React from 'react'


const CoinDetail = (props) => {
  const { coin } = props

  return (
    <div>
      <h1>{ coin.symbol }</h1>
      <p>{ coin.lastPrice }</p>
    </div>
  )
}


export default CoinDetail
