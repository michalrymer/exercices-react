
const Cash = (props) => {
  const value = (props.cash / props.ratio).toFixed(2);
  return (

    <div>{props.title}{props.cash <= 0 ? "" : value}</div>
  )
}

class ExchangeCounter extends React.Component {

  state = {
    amount: "",
    product: "electricity"
  }

  currencies = [
    {
      id: 1,
      name: "dollar",
      ratio: 4.21,
      title: "Wartość w USD: "
    },
    {
      id: 2,
      name: "euro",
      ratio: 4.55,
      title: "Wartość w Euro: "
    },
    {
      id: 3,
      name: "pound",
      ratio: 5.18,
      title: "Wartość w GBP: "
    }
  ]

  handleExchange = event => {
    this.setState({
      amount: event.target.value
    })
  }
  handleSelect = event => {
    this.setState({
      product: event.target.value
    })
  }
  insertSuffix(select) {
    if (select === "electricity") return <em>za kWh</em>
    else if (select === "gas") return <em>za litr</em>
    else if (select === "oranges") return <em>za kg</em>
    else return null
  }

  render() {

    const { amount, product } = this.state;

    const calculators = this.currencies.map(currency => (
      <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount} />
    ))

    return (
      <div className="app">
        <label>Wybierz produkt
          <select value={product} onChange={this.handleSelect} >
            <option value="electricity">prąd</option>
            <option value="gas">benzyna</option>
            <option value="oranges">pamarańcze</option>
          </select>
        </label>
        <br />
        <label>Wpisz wartość w PLN
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleExchange}
          />
          {this.insertSuffix(this.state.product)}

        </label>
        {calculators}
      </div>
    )

  }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))
