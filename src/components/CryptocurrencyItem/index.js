// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {CryptocurrencyDataDetails} = props
  const {
    currencyLogo,
    currencyName,
    usdValue,
    euroValue,
  } = CryptocurrencyDataDetails

  return (
    <li className="list-items">
      <div className="currency-name-log-usd-euro-container">
        <div className="logo-name-container">
          <img
            src={currencyLogo}
            alt={currencyName}
            className="currency-logo"
          />
          <p className="currency-name">{currencyName}</p>
        </div>
        <div className="usd-euro-container">
          <p className="usd-currency">{usdValue}</p>
          <p className="euro-currency">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
