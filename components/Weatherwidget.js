import API from '../Api.json';
import Fetch from 'isomorphic-unfetch';

//'https://api.unsplash.com/photos/?client_id=fa2524665e8e782bb4cfc1947a243daa7fc789ce4019748b67b60c6d661e5629
class Weatherwidget extends React.Component{

  state = {
    images: undefined,
    image: undefined
  }

  componentDidMount(){
    this.getImage();
  }
//https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${cred.APP_ID}
  getImage = async() => {
    const key = API['Access Key'];
    fetch('https://api.unsplash.com/search/photos/?page=1&per_page=10&query=cityscape&client_id=' + key)
    	.then(res => res.json())
    	.then(data => {
        const res = data.results;
        const img = res[1].urls.small;
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
