class Prices extends React.Component{
  state = {
    currency: 'EUR'
  }

  render(){
    return(
      <div>
        <ul className = "listgroup">
          <li className = "list-group-item">
            Bitcoin rate for {this.props.bpi[this.state.currency].description}: &nbsp;
            <span class="badge badge-primary"> {this.props.bpi[this.state.currency].code} </span>
            <strong> &nbsp; {this.props.bpi[this.state.currency].rate} </strong>
          </li>
        </ul>
        <br/>
        <select className="form-control" onChange={e => this.setState({currency: e.target.value})}>
          <option value = "EUR">EUR</option>
          <option value = "GBP">GBP</option>
          <option value = "USD">USD</option>
        </select>
      </div>
    );
  }
}

export default Prices;
