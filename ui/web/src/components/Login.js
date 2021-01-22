import React, { Component } from 'react';
import './Login.css';

class LoginComponents extends Component {

    render() {
        return (
            <div className="login">
        
            <div className="login__card">
             <div className='login__container'>
                <h1>Login</h1>

                <form onSubmit={this.props.onSubmit}>
                    <h5>User Name</h5>
                    <input type='text' placeholder="username" onChange={this.props.handleChange('username')}/>

                    <h5>Password</h5>
                    <input type='password' placeholder="password" onChange={this.props.handleChange('password')}/>

                    <button className="login__signInButton" type='submit'>Login</button>
                </form>

                
            </div>
            </div>
        </div>
        );
    }

}



export default LoginComponents;
