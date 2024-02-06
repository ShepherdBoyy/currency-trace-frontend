import React from "react"
import "./catalog.style.css"
import philippinesCoins from "../../database/philippines/PhilippinesCoins.jsx"
import philippinesBanknotes from "../../database/philippines/PhilippinesBanknotes.jsx"
import euroCoins from "../../database/euro/EuroCoins.jsx"
import euroBanknotes from "../../database/euro/EuroBanknotes.jsx"
import britishPoundCoins from "../../database/british-pound/BritishPoundCoins.jsx"
import britishPoundBanknotes from "../../database/british-pound/BritishPoundBanknotes.jsx"
import usDollarCoins from "../../database/us-dollar/USDollarCoins.jsx"
import usDollarBanknotes from "../../database/us-dollar/USDollarBanknotes.jsx"
import kuwaitCoins from "../../database/kuwait-dinar/KuwaitCoins.jsx"
import kuwaitBanknotes from "../../database/kuwait-dinar/KuwaitBanknotes.jsx"

export default function Catalog() {
  return (
    <div className="catalog-container">
      <div className="currency-container">
        <h1>Philippine Peso</h1>
        {philippinesCoins.map(item => (
          <div key={item.moneyName} className="items-container">
            <div className="coin-image-container">
              <img src={item.obverse} alt={item.moneyName} />
              <img src={item.reverse} alt={item.moneyName} />
            </div>
            <div className="details-container">
              <h2>{item.moneyName}</h2>
              <p>{item.moneyDescription}</p>
            </div>
          </div>
        ))}
        {philippinesBanknotes.map(item => (
          <div key={item.moneyName} className="items-container">
            <div className="banknote-image-container">
              <img src={item.obverse} alt={item.moneyName} />
              <img src={item.reverse} alt={item.moneyName} />
            </div>
            <div className="details-container">
              <h2>{item.moneyName}</h2>
              <p>{item.moneyDescription}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="currency-container">
        <h1>Euro</h1>
        {euroCoins.map(item => (
          <div key={item.moneyName} className="items-container">
            <div className="coin-image-container">
              <img src={item.obverse} alt={item.moneyName} />
              <img src={item.reverse} alt={item.moneyName} />
            </div>
            <div className="details-container">
              <h2>{item.moneyName}</h2>
              <p>{item.moneyDescription}</p>
            </div>
          </div>
        ))}
        {euroBanknotes.map(item => (
          <div key={item.moneyName} className="items-container">
            <div className="banknote-image-container">
              <img src={item.obverse} alt={item.moneyName} />
              <img src={item.reverse} alt={item.moneyName} />
            </div>
            <div className="details-container">
              <h2>{item.moneyName}</h2>
              <p>{item.moneyDescription}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="currency-container">
        <h1>British</h1>
        {britishPoundCoins.map(item => (
          <div key={item.moneyName} className="items-container">
            <div className="coin-image-container">
              <img src={item.obverse} alt={item.moneyName} />
              <img src={item.reverse} alt={item.moneyName} />
            </div>
            <div className="details-container">
              <h2>{item.moneyName}</h2>
              <p>{item.moneyDescription}</p>
            </div>
          </div>
        ))}
        {britishPoundBanknotes.map(item => (
          <div key={item.moneyName} className="items-container">
            <div className="banknote-resize-image-container">
              <img src={item.obverse} alt={item.moneyName} />
              <img src={item.reverse} alt={item.moneyName} />
            </div>
            <div className="details-container">
              <h2>{item.moneyName}</h2>
              <p>{item.moneyDescription}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="currency-container">
        <h1>United States of America</h1>
        {usDollarCoins.map(item => (
          <div key={item.moneyName} className="items-container">
            <div className="coin-image-container">
              <img src={item.obverse} alt={item.moneyName} />
              <img src={item.reverse} alt={item.moneyName} />
            </div>
            <div className="details-container">
              <h2>{item.moneyName}</h2>
              <p>{item.moneyDescription}</p>
            </div>
          </div>
        ))}
        {usDollarBanknotes.map(item => (
          <div key={item.moneyName} className="items-container">
            <div className="banknote-image-container">
              <img src={item.obverse} alt={item.moneyName} />
              <img src={item.reverse} alt={item.moneyName} />
            </div>
            <div className="details-container">
              <h2>{item.moneyName}</h2>
              <p>{item.moneyDescription}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="currency-container">
        <h1>Kuwait</h1>
        {kuwaitCoins.map(item => (
          <div key={item.moneyName} className="items-container">
            <div className="coin-image-container">
              <img src={item.obverse} alt={item.moneyName} />
              <img src={item.reverse} alt={item.moneyName} />
            </div>
            <div className="details-container">
              <h2>{item.moneyName}</h2>
              <p>{item.moneyDescription}</p>
            </div>
          </div>
        ))}
        {kuwaitBanknotes.map(item => (
          <div key={item.moneyName} className="items-container">
            <div className="banknote-image-container">
              <img src={item.obverse} alt={item.moneyName} />
              <img src={item.reverse} alt={item.moneyName} />
            </div>
            <div className="details-container">
              <h2>{item.moneyName}</h2>
              <p>{item.moneyDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
