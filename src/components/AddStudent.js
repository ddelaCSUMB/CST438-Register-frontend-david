import * as React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state={email:'', message:'', name:''};
  }
  
 handleSubmit = () => {
    



    fetch('http://localhost:8080/students',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        statusCode: 0,
        status: "On Hold"     
      })
    })
      .then(response => response.json() )
      .then(responseData => {
        const { email } = responseData;
        this.setState({
          email: email, 
          message: (email == this.state.email ? 'Student added' : 'Email exsists, student not added')
        });
      })
      .catch(err => console.error(err))
  }

    handleChange = (event) =>  {
     this.setState({[event.target.name]: event.target.value});
  }

  
  render() {
    const {alias, name, message } = this.state;
    return (
      <div>
        <h3>Enter fields below: </h3>
        <TextField autoFocus style = {{width:200}} 
             label="Your Name" name="name" 
             onChange={this.handleChange}  value={name} /> 
        <br/> <br/>
        <TextField style = {{width:200}} label="Your Email" name="email" 
             onChange={this.handleChange}  value={alias} />

        <br/> <br/>

        <Button id="add" variant="outlined" color="primary" style={{margin: 10}}
             onClick={this.handleSubmit} >Add Student</Button>

        <Button variant="outlined" color="primary" style={{margin: 10}}
             onClick={() => window.location.reload(false)}>Clear</Button>

        <h3 id="result">{message}</h3>
      </div>
      ); 
  }
}
export default AddStudent; 

