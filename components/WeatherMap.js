import Weatherwidget from './Weatherwidget';

class WeatherMap extends React.Component{


  state = { images: undefined };

  componentDidMount(){
    this.getWeatherData();
  }

  getWeatherData = async() => {
      fetch('https://tile.openweathermap.org/map/precipitation_new/1/1/1.png?appid=038b0cc9c6214552f03247312f5f166a')
      .then((response) => {
        if (response.status == 200) {
          return response.blob() // <-- consume body here
        } else {
          throw new Error();
        }
      }).then((responseData) => {
        const objectURL = URL.createObjectURL(responseData);
        this.setState({images:objectURL});
      })
  }

  render(){
    return(
      <div>
        <img src={this.state.images}/>

          <div class="card border-primary mb-3" >
            <div class="card-header"><h4 class="card-title"><span class="badge badge-primary">sample text</span></h4></div>
            <div class="card-body">
              <Weatherwidget />
              <p class="card-text">All weather information is provided by <span class="badge badge-info">OpenWeatherAPI</span> available at Openweatherapi </p>
            </div>
          </div>
      </div>
    );
  }
}

export default WeatherMap;
//https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid={api_key}
//key:  038b0cc9c6214552f03247312f5f166a
