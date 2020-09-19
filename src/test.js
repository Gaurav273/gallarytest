import React ,{ Component } from 'react';
import logo from './logo.svg';
import Images from './Images'
import upload from './upload.svg';
import axios from 'axios';


import './App.css';
import Appbar from './Appbar';
import {Card,Button,CardColumns} from 'react-bootstrap';
import CardDeck from 'react-bootstrap/CardDeck';



const BASE_URL = 'http://testserverne.herokuapp.com/';

class App extends Component {
  state = {
    loading: true,
    uploading: false,
    image : null,
     url : '',
    images: [],
   imageUrls: [],
   appointment:[],
   aaa:[],

  }


componentDidMount = async() => {
 


    fetch('http://testserverne.herokuapp.com/get-images')
      .then(response => response.json())
        .then(data => this.setState({ aaa: data.images })

      );

      
  }
 


  
selectImages = (event) => {
        
let images = []
for (var i = 0; i < event.target.files.length; i++) {
images[i] = event.target.files.item(i);
}
images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
let message = `${images.length} valid image(s) selected`
this.setState({ images, message })
}




uploadImages = () => {

  if(this.state.message == undefined){
    alert("please select image")
  }
  else{
const uploaders = this.state.images.map(image => {
const data = new FormData();
data.append("image", image, image.name);
// Make an AJAX upload request using Axios
return axios.post(BASE_URL + 'upload', data)
.then(response => {
this.setState({
imageUrls: [ response.data.imageUrl, ...this.state.imageUrls ]
});
console.log(this.state.imageUrls)
})
});
  }
}


  render(){
    console.log(this.state.aaa )
    const renderCard = (card,index) =>{
      return(
             <div class="column">
       <CardDeck>
          <Card border="primary">
  <Card.Img variant="top" style = {{height:'200px',width:'200px'} }src = {card}/>
  <Card.Body>
   <Card.Title style = {{color:'#2c5282'}}> image {index +1}</Card.Title>
  </Card.Body>
    
</Card>
</CardDeck>
     </div>
      )
    }


  return (
    <div className="App">
    <div>
    <Appbar/>
    </div>
      <header className="App-header">   
  
 <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={this.selectImages} />
          <button className="submitButton" 
            type="submit" 
            onClick={this.uploadImages}><img src={upload} className="App-logo2"/>Upload</button>
        </form>
      </div>


     <div class="row">
      {this.state.aaa.map(renderCard)}
      </div>
      </header>


<div>
<footer class="App-bar">
  <div class="footer-copyright text-center py-3">
   
    <a className="nav-item  username-box">
                                    Full stack chalange-2020
                                </a>
  </div>
</footer>
</div>

      
    </div>
  );
  }
}

export default App;



