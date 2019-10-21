import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    myStocks: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(response => {
      this.setState({
        stocks: response
      })
    })
  }

  addStock = (selectedStock) => {
    if (this.state.myStocks.includes(selectedStock)) {
      console.log('that stock has already been added to your portfolio')
    } else {
      this.setState({
        myStocks: [...this.state.myStocks, selectedStock]
      })
      console.log('you added a stock to your portfolio')
    }
  }

  removeStock = (selectedStock) => {
    this.setState({
      myStocks: this.state.myStocks.filter(stock => stock !== selectedStock)     
    })
    console.log('you removed a stock from your portfolio')
  }

  sortABC = () => {
    this.setState({
      stocks: this.state.stocks.sort((a, b) => (a.name > b.name) ? 1 : -1)
    })
    console.log('you wanna alphabetize?')
  }

  sort$$$ = () => {
    this.setState({
      stocks: this.state.stocks.sort((a, b) => (a.price > b.price) ? 1 : -1)
    })
    console.log('you wanna sort by price?')
  }

  sortTicker = () => {
    this.setState({
      stocks: this.state.stocks.sort((a, b) => (a.ticker > b.ticker) ? 1 : -1)
    })
    console.log('you wanna sort by ticker name?')
  }

  filterByType = (formInput) => {
    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(response => {
      this.setState({
        stocks: response.filter(stock => stock.type === formInput)
      })
    })
  }

  render() {
    console.log('stocks:', this.state.stocks)
    console.log('myStocks:', this.state.myStocks)


    

    return (
      <div>
        <SearchBar 
          sortABC={() => this.sortABC()} 
          sort$$$={() => this.sort$$$()} 
          sortTicker={() => this.sortTicker()}
          filterByType={(formInput) => this.filterByType(formInput)}
          />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} addStock={this.addStock} sortABC={() => this.sortABC()} sort$$$={() => this.sort$$$()}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.myStocks} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
