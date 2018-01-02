import React, { Component } from 'react'
import axios from 'axios'

import CoinDetail from '../components/CoinDetail'


class CoinShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      coin: null
    }
  }

  componentDidMount () {
    axios.get(`http://localhost:3001/api/prices/${this.props.match.params.symbol}`)
      .then((response) => {
        this.setState({
          coin: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    return (
      <div>
        {
          !this.state.coin ?
          <p>Loading...</p> :
          <CoinDetail
            coin={this.state.coin}
          />
        }
      </div>
    )
  }
}


export default CoinShow
