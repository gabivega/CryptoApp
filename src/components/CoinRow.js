import React from 'react'

const CoinRow = ({coin, index}) => {
  console.log(coin, index)
  return (
    <tr>
      <td>{index}</td>
      <td><img src={coin.image} alt="{coin.name}" style= {{width:"20px"}} className="me-2" />
      <span>{coin.name}</span>
      <span className= 'ms-2 text-muted text-uppercase'>{coin.symbol}</span>
      </td>
      <td>$ {coin.current_price}</td>
      <td className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"}>
          {coin.price_change_percentage_24h}</td>
      <td>$ {coin.low_24h}</td>
      <td>$ {coin.high_24h}</td>
    </tr>
  )
}

export default CoinRow;