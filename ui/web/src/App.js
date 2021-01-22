import React, { Component } from "react";
import './App.css';
import LoginComponents from "./components/Login"
import axios from "axios";
import TableComponent from "./components/Table"

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {

      loggedIn: false,
      username: "",
      password: "",
      userList: [],

    };
  }

  handleChange = (input) => (e) => {

    this.setState({
      [input]: e.target.value,

    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.username === "" || this.state.password === "") {
      window.alert("The field is required!");
    } else {
      let formData = new FormData();
      formData.append("username", this.state.username);
      axios

        .post("http://localhost:80/bizlogic/login.php", formData)
        .then((res) => {

          if (res.data[0].password != this.state.password) {

            window.alert("Incorrect Username or password!");

          } else {
            this.setState({
              loggedIn: true,
              password: res.data[0].password
            })
          }
        })
        .catch((err) => console.log(err));
    }
    
  };

  getUsername() {
    return this.state.username;
  }

  render() {
    return (
      <div>
        {this.state.loggedIn ? (

          <TableComponent getUsername={this.state.username}/>

        ) : (

          <LoginComponents
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
            
          />
        )}
      </div>
    );
  }
}


export default App;
