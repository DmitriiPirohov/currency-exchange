import { useEffect, useState } from 'react';
import './exchange.scss'

export const Exchange = ({ currency }) => {
  const [inputMoney, setInputMoney] = useState('');
  const [outPutMoney, setOutPutMoney] = useState('');
  const [currencyForSell, setCurrencyForSell] = useState(1);
  const [currencyForBuy, setCurrencyForBuy] = useState(1);
  const [controler, setControler] = useState('second')

  useEffect(() => {
    if(controler === 'second') {
      setOutPutMoney(() => (Number(inputMoney) * (( Number(currencyForSell)/ Number(currencyForBuy)))).toFixed(2))
    } else {
      setInputMoney(() => (Number(outPutMoney) * (( Number(currencyForBuy)/ Number(currencyForSell)))).toFixed(2))
    }
  }, [inputMoney, outPutMoney, currencyForSell, currencyForBuy])

  function currencyValidator(target, position) {
    if(String(target).length <= 1 && target >= '00') {
      target = '0.'
    }

    if (position === 'first') {
      if (target >= 0) {
        return (
          setInputMoney(Number(target)),
          setControler('second')
        )
      }
    }

    if (position === 'second') {
      if (target >= 0) {
        return (
          setOutPutMoney(Number(target)),
          setControler('first')
        )
      }
    }
  }

return (
  <>
    <div className="card card-content">
      <h1>Currency Exchange</h1>

      <div className="dropdown-trigger ">
        <select
          name=""
          id=""
          className="dropdown-trigger button fordropsize"
          value={currencyForSell}
          onChange={(event) => setCurrencyForSell((event.target.value))}
        >
          {currency.map(currency => (
            <option
              key={currency.cc}
              value={currency.rate}
            >
              {currency.cc}
            </option>
          ))}
        </select>
      </div>

      <div className="control small">
        <input
          className="input is-focused cash-outline"
          type="text"
          placeholder={'value to sell'}
          value={inputMoney}
          onChange={(event) => currencyValidator((event.target.value), 'first')}
        >
        </input>
      </div>

      <div className="dropdown-trigger ">
        <select
          name=""
          id=""
          className="dropdown-trigger button fordropsize"
          value={currencyForBuy}
          onChange={(event) => setCurrencyForBuy(event.target.value)}
        >
          {currency.map(currency => (
            <option
              key={currency.cc}
              value={currency.rate}
            >
              {currency.cc}
            </option>
          ))}
        </select>
      </div>

      <div className="control small">
        <input
          className="input is-focused cash-outline"
          type="text"
          placeholder={'value to sell'}
          value={outPutMoney}
          onChange={(event) => currencyValidator((event.target.value), 'second')}
        >
        </input>
      </div>

    </div>
  </>
);
};
