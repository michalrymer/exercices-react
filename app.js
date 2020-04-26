
const Cash = (props) => {
  const value = (props.cash / props.ratio).toFixed(2);
  return (

    <div>{props.title}{props.cash <= 0 ? "" : value}</div>
  )
}

class ExchangeCounter extends React.Component {

  state = {
    amount: ""
  }

  currencies = [
    {
      id: 1,
      name: "dollar",
      ratio: 4.21,
      title: "Wartość w dolarach USA: "
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
      title: "Wartość w Funtach: "
    }

  ]

  handleExchange = event => {
    this.setState({
      amount: event.target.value
    })
  }
  render() {

    const { amount } = this.state;

    const calculators = this.currencies.map(currency => (
      <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount} />
    ))

    return (
      <div className="app">
        <label></label>
        <input type="number"
          value={this.state.amount}
          onChange={this.handleExchange} />
        {calculators}
      </div>
    )

  }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))
