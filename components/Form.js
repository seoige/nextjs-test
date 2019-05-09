import API from '../json/API';

class Form extends React.Component{

  loadWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const Api_Key = API['OpenWeatherAPI']['appid'];
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metric `);
    const response = await api_call.json();
    console.log(city +"   "+ country);
    this.props.handleWeatherData(response);
  }

  render(){
    return(
      <form onSubmit={this.loadWeather}>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <button>Get Weather</button>
      </form>
    );
  }

}

export default Form;
