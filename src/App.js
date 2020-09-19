import React, { useState } from 'react';
import logo from './logo.svg';
import Images from './Images'
import upload from './upload.svg';
import axios from 'axios';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import './App.css';
import Appbar from './Appbar';
import {Card,Button,CardColumns} from 'react-bootstrap';
import CardDeck from 'react-bootstrap/CardDeck';


function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
    <div>
    <Appbar/>
    </div>
      <header className="App-header">    
     <UploadForm />
     <ImageGrid setSelectedImg={setSelectedImg} />     
      </header>
      <div>
      <footer class="App-bar">
        <div class="footer-copyright text-center py-3">
          <a className="nav-item  username-box">
                     Full stack chalange-202
        </a>
  </div>
</footer>
</div>

      
    </div>
  );
  
}

export default App;



