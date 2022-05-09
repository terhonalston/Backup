import React, { Component } from "react";
import LoginScreen from "./LoginScreen";

export default class FormData extends Component{

    userData;

    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            username:'',
            email:'',
            password:'',

        }
    }

    onChangeUsername(e){
        this.setState({username: e.target.value})
    }

    onChangeEmail(e){
        this.setState({email: e.target.value})
    }

    onChangePassword(e){
        this.setState({password: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        
        this.setState({
            username:'',
            email:'',
            password:'',
            })
    }

    componentDidMount(){
        this.userData = JSON.parse(localStorage.getItem('user'))

        if(localStorage.getItem('user')){
            this.setState({
                username: this.userData.username,
                email: this.userData.email,
                password: this.userData.password
            })
        }
        else{
            this.setState({
                username:'',
                email:'',
                password:''
            })
        }
    }

    componentDidUpdate(nextProps, nextState){
        localStorage.setItem('user', JSON.stringify(nextState))
    }

    render(){
        return(
            <div className="container">
                <img src="src\Images\avatar.jpg" alt=""></img>
                <form onSubmit={this.onSubmit} action="./LoginScreen.js">
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUsername}/>
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail}/>
                        <label>Password</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword}/>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            )
    }
}
