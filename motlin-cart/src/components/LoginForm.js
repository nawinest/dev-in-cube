import React, { Component } from 'react';
import { TextInput, Button } from 'grommet';
import {connect} from 'react-redux'

class LoginFrom extends Component {
    state = {
        username: '',
        password: ''
    }
    
    handleChange =(e)=>{
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    handleLogin = async ()=>{
        const login = this.props.login
        try{
            await login(this.state)
            alert('login success')
        }catch(e){
            alert('login fail') 
        }
        
    }

    render() {
        return (
            <div>
                <TextInput placeholder="Username" name="username" onChange={this.handleChange}></TextInput>
                <TextInput placeholder="Username" type="password" name="password" onChange={this.handleChange}></TextInput>
                <Button label="sign in" onClick={this.handleLogin}></Button>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return{
        login: dispatch.user.login
    }
}


export default connect(null , mapDispatchToProps)(LoginFrom);