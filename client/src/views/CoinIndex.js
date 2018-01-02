import React, { Component } from 'react'
import axios from 'axios'

import NavList from '../components/NavList'

class CoinIndex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      coins: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:3001/api/prices')
      .then((response) => {
        this.setState({
          coins: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    return (
      <div>
        <h1>Dashboard</h1>
        <NavList
          data={this.state.coins}
          displayAttr="symbol"
          pathAttr="symbol"
        />
      </div>
    )
  }
}


export default CoinIndex
