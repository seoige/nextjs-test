import * as _ from 'underscore';

class ExchangeCurrent extends React.Component{
  state = {
    currency: 'EUR'
  }

  myStyle = {
    maxWidth: '500px'
  };

  sortByKeys = (obj, comparator) => {
      let keys = _.sortBy(_.keys(obj), function (key) {
          return comparator ? comparator(obj[key], key) : key;
      });

      return _.object(keys, _.map(keys, function (key) {
          return obj[key];
      }));
  }

  createList = () => {
    let table = [];
    let data = this.props.exc.rates;
    data = this.sortByKeys(data);
    for(let d in data){
      table.push(<li className = "list-group-item"><label>{d}</label>:  <span>{data[d]}</span></li>);
    }
    return table;
  }

  render(){

    return(
      <div>
      <div>
      </div>
        <div class="card border-primary mb-3" style={this.myStyle}>
          <div class="card-header"><h4 class="card-title"><span class="badge badge-primary">{this.state.currency}</span></h4>Exchange Rates for:  <strong>{this.props.exc.date}</strong></div>
          <div class="card-body">
            <ul className = "listgroup">
              {this.createList()}
            </ul>
            <p class="card-text">All currency exchange rates are provided by <span class="badge badge-info">exchangeratesapi</span> and are published by the European Central Bank </p>
          </div>
        </div>
        </div>
    );
  }
}

const styles = {width:'200px'};

export default ExchangeCurrent;

  //{JSON.stringify(this.props.exc, null, 2)}
