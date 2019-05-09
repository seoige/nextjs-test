import API from '../json/API.json';
import Form from './Form';
import Title from './Title';
import WeatherForecast from './WeatherForecast';

class Weatherwidget extends React.Component{

  state = {
    images: undefined,
    image: undefined,
    weather: undefined,
    temp: undefined,
    humidity: undefined,
    description:undefined,
    city: undefined,
    country: undefined
  }

  componentDidMount(){
    this.getImage();
  }

  getWeatherData = (weatherData) => {
      this.setState({
        weather: weatherData,
        temp: weatherData.main.temp,
        humidity: weatherData.main.humidity,
        description: weatherData.weather[0].description,
        city: weatherData.name,
        country: weatherData.sys.country
      });
      console.log('in weather widget');
      console.log(weatherData)
  }

  getImage = async() => {

    const key = API['unsplash']['Access Key'];
    fetch('https://api.unsplash.com/search/photos/?page=1&per_page=10&query=cityscape&client_id=' + key)
    	.then(res => res.json())
    	.then(data => {
        const res = data.results;
        const img = res[2].urls.small;
    		this.setState({ images: data.results ,image: img });
    	})
    	.catch(err => {
    		console.log('Error happened during fetching!', err);
    	});
  }

  render(){
    return(
      <div>
        <p>A test text piece</p>
        <img src={this.state.image}/>
        <Title />
        <Form handleWeatherData = {this.getWeatherData}/>
        <WeatherForecast
          temperature={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default Weatherwidget;
