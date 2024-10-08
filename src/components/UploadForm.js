
import React, { useState } from 'react';
import upload from './upload.svg';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (

     <div className="previewComponent">
        <form>
         <label class ="new-button" for="upload">
         <img src={upload} className="App-logo2" />Upload
          <input id="upload"
            type="file" 
            onChange={handleChange} />
            </label>
           <div className="output">
        { error && <div className="error">{ error }</div>}
      </div>
        </form>
      </div>
    // <form>
      // <label>
      //   <input type="file" onChange={handleChange} />
      //   <span>+</span>
      // </label>
      // <div className="output">
      //   { error && <div className="error">{ error }</div>}
      //   { file && <div>{ file.name }</div> }
      //   { file && <ProgressBar file={file} setFile={setFile} /> }
      // </div>
    // </form>
  );
}

export default UploadForm;