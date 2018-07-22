import React, { Component } from 'react'
import axios from 'axios'

export default class FileUpload extends Component {

  render() {
    return(
      <div class="container">
        <form onSubmit={this.handleUpload}>
          <div className="form-group">
            <input className="form-control"  ref={(ref) => { this.uploadInput = ref; }} type="file" />
          </div>

          <div className="form-group">
            <input className="form-control" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Optional name for the file" />
          </div>

          <button className="btn btn-success" type>Upload</button>

        </form>
      </div>
    )
  }

  constructor(props) {
    super(props);
      this.state = {
        uploadStatus: false
      }

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  uploadInput = {}
  fileName = {}
  
  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    console.log("DATABACK"+data);

    axios.post('/api/login/auth', data)
      .then(function (response) {
    this.setState({ imageURL: `api/login/auth/${data.body.file}`});
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
// import React from 'react'
// import axios, { post } from 'axios';

// class SimpleReactFileUpload extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { selectedFile: null }

//         // this.onFormSubmit = this.onFormSubmit.bind(this)
//         // this.onChange = this.onChange.bind(this)
//         // this.fileUpload = this.fileUpload.bind(this)
//     }
//     // onFormSubmit(e) {
//     //     e.preventDefault() // Stop form submit
//     //     this.fileUpload(this.state.file)
//     // }
//     // onChange(e) {
//     //     this.setState({ file: e.target.files[0] })
//     // }
//     // fileUpload(file) {
//     //     const url = '/api/login/auth';
//     //     const formData = new FormData();
//     //     formData.append('file', file)
//     //     const config = {
//     //         headers: {
//     //             'content-type': 'multipart/form-data'
//     //         }
//     //     }
//     //     var returnObj = {
//     //         imgData: formData
//     //     }

//     //     axios.post(url, returnObj, config);
//     // }

//     fileChangedHandler = (event) => {
//         this.setState({ selectedFile: event.target.files[0] })
//     }

//     uploadHandler = () => {
//         console.log(this.state.selectedFile);
//             const config = {
//             headers: {
//                 'encoding': 'binary'
//             }
//         }
//         axios.post('/api/login/auth', this.state.selectedFile,config);
//     }

//     // uploadHandler = () => {
//     //     const formData = new FormData()
//     //     formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
//     //    console.log("Myfile" + JSON.stringify(formData));
//     //     axios.post('/api/login/auth', formData)
//     //   }

//     render() {
//         return (
//             <form onSubmit={this.onFormSubmit}>
//                 <h1>File Upload</h1>
//                 <input type="file" onChange={this.fileChangedHandler}/>
//                     <button onClick={this.uploadHandler}>Upload!</button>
                
//             </form>
//                 )
//             }
//         }
        
        
        
// export default SimpleReactFileUpload