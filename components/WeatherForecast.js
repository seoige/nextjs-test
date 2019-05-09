class WeatherForecast extends React.Component{

  render(){

    return(
      <div>
        {this.props.country && this.props.city && <p>Location: {this.props.city},    {this.props.country}</p>}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.description && <p>Conditions: {this.props.description}</p>}
      </div>
    );
  }
}

export default WeatherForecast;


/*
temperature={this.state.temperature}
city={this.state.city}
country={this.state.country}
humidity={this.state.humidity}
description={this.state.description}
*/
