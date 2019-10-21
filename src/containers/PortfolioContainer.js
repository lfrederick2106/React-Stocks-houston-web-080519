import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    if (this.props.stocks.length === 0) {
      return (
        <div>
          <h2>Portfolio</h2>
          <p>Your portfolio is currently empty.</p>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Portfolio</h2>
          {this.props.stocks.map(stock =>
            <Stock stock={stock} key={stock.id} onClick={() => this.props.removeStock(stock)}/>)}
        </div>
      );
    }
  }

}

export default PortfolioContainer;
