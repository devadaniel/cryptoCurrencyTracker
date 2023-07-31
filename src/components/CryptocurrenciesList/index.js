// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyList extends Component {
  state = {
    CryptocurrencyData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrencyData()
  }

  getCryptocurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    // console.log(data)
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      euroValue: eachData.euro_value,
      usdValue: eachData.usd_value,
    }))
    this.setState({CryptocurrencyData: updatedData, isLoading: false})
  }

  renderCurrencyCardItem = () => {
    const {CryptocurrencyData} = this.state
    return (
      <div className="currency-list-container">
        <div className="currency-type-container">
          <h1 className="coin-type">Coin Type</h1>
          <div className="usd-euro-container">
            <h1 className="usd-name">USD</h1>
            <h1 className="euro-name ">EURO</h1>
          </div>
        </div>
        <ul className="crypto-currency-list-items-container">
          {CryptocurrencyData.map(eachItem => (
            <CryptocurrencyItem
              key={eachItem.id}
              CryptocurrencyDataDetails={eachItem}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="crypto-list-container">
        <div className="heading-image-container">
          <h1 className="heading">Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="crypto-image"
          />
        </div>

        {isLoading ? (
          <div className="loader" data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCurrencyCardItem()
        )}
      </div>
    )
  }
}

export default CryptocurrencyList
