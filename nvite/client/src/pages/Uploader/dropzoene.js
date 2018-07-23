import Dropzone from 'react-dropzone';
import React, { Component } from 'react';
import { post } from "superagent";
import Button from "@material-ui/core/Button";

export default class Basic extends React.Component {

    constructor() {
        super()
        this.state = {
            files: [],
            user: "",
            password:"",
            num:1,
            warningState:""
        }
        
    }

    onDrop(files) {
        this.setState({
            files
        });
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
    };

    onUploadClick() {
       
       if(this.state.files.length > 2){
        this.setState({
            warningState : ""
        })
        const req = post('/api/login/signAuth');
        var userData = {
            user: this.state.user,
            password: this.state.password
        }
        var uploadOG = "😬 U-p-l-o-d-i-n-g 😬"
      
        this.state.files.forEach(file => {
            uploadOG = uploadOG;
            req.attach("image" + this.state.num, file);
            this.setState({num:this.state.num+1,warningState:uploadOG});
        });
        req.field(userData); //Send the user info
        req.then( (data) => { 
            console.log(data)
            var uploadOGDone = "😬DONEEEEEEEEEE with the Upload/SignUP 😬 "
            this.setState({warningState:uploadOGDone});
        }).catch((data) => {
            console.log(data);
            this.setState({warningState:"Error"});
        });
    }
    else{
        this.setState({
            warningState : "😬😬😬😬😬😬😬😬😬😬Not Enough Pictures are uploaded, cant sign - up 😬😬😬😬😬😬😬😬😬😬😬😬"
        })
    }
    }


    render() {
        return (
            <div className="container" style={{ color: 'white',textAlign:'center' }}>
               <div style={{ width:'960px', margin: '0 45%',textAlign:'center'}}>
                        <Dropzone onDrop={this.onDrop.bind(this)}>
                            <p style={{ color: 'white'}}> 🤘Try dropping some png here 🤘, or click to select files to upload.👉🏻 👉🏻 </p>
                        </Dropzone>
                </div>
                <section style={{ color: 'white',textAlign:'center' }}>
                    <aside style={{ color: 'white' }}>
                        <h2>{this.state.warningState}</h2>
                        <h2>We recomend up to 😃 😃 😃 😃 😃 (5 face)pictures if available</h2>
                        <ul>
                            {
                                this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                            }
                        </ul>
                       
                    </aside>
                </section>

                <input
                    placeholder="Username"
                    name="user"
                    value={this.state.user}
                    onChange={this.handleInputChange}
                    type="text"
                />
                <input
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    type="password"
                />
                <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={this.onUploadClick.bind(this)}
                >
                    Submit
          </Button>

            </div>
        );
    }
}

<Basic />