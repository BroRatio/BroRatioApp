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
            num:1
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
        const req = post('/api/login/auth');

        var userData = {
            user: this.state.user,
            password: this.state.password
        }
        this.state.files.forEach(file => {

            req.attach("image" + this.state.num, file);
            this.setState({num:this.state.num+1});
        });

        req.field(userData); //Send the user info
        req.then(function (data) { console.log(data) });

    }


    render() {
        return (
            <div className="container" style={{ color: 'white' }}>
                <section>
                    <div className="dropzone">
                        <Dropzone onDrop={this.onDrop.bind(this)}>
                            <p style={{ color: 'white' }}>Try dropping some files here, or click to select files to upload.</p>
                        </Dropzone>
                    </div>
                    <aside style={{ color: 'white' }}>
                        <h2>Dropped files</h2>
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