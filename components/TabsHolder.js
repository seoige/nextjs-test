import ExchangeCurrent from './ExchangeCurrent';
import WeatherMap from './WeatherMap';
class TabsHolder extends React.Component{

  render(){

    return(
      <div>
      <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#home1">Currency Exchange Rates</a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" data-toggle="tab" href="#profile">Profile</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled tab example</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </li>
  </ul>
  <div id="myTabContent" class="tab-content">
    <div class="tab-pane fade" id="home1">
      <ExchangeCurrent exc = {this.props.exc}/>
    </div>
    <div class="tab-pane fade active show" id="profile">
      <p>This is an example profile tab and can be filled with any information about your profile. When completed it will hold images, video, textboxes and postable updates.</p>
      <WeatherMap/>
    </div>
    <div class="tab-pane fade" id="dropdown1">
      <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>
    </div>
    <div class="tab-pane fade" id="dropdown2">
      <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.</p>
    </div>
  </div>
  </div>
    );
  }
}

export default TabsHolder;
