import API from '../json/API.json';

class Weatherwidget extends React.Component{

  state = {
    images: undefined,
    image: undefined
  }

  componentDidMount(){
    this.getImage();
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
      </div>
    );
  }
}

export default Weatherwidget;
