import React from 'react';

export default class Form extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      inputNumber: '',
      inputNumberError:'',
      apiResults:[],
      isLoaded: false
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  
  validate = () => {
    let inputNumberError = '';
    let temp=parseInt(this.state.inputNumber,10);

    if ((temp>=10000)) {
      inputNumberError = 'Input cannot exceed 10000';
    }

    if (inputNumberError) {
      this.setState({ inputNumberError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    
    if (isValid) {
      console.log(this.state);
    
      fetch('http://localhost:8081/primeNumber/'+this.state.inputNumber)
      .then(res=>res.json())
      .then(json=>{
        this.setState({
          isLoaded:true,
          apiResults: json.result,
        })
        console.log(json);
    })
    .catch(() => console.log("Can’t access response. Blocked by browser?"))
    console.log("fetch complete")
    console.log(this.state);
  }
  };

	render() {
    const {inputNumber,apiResults}=this.state;
    
    return (
      <form onSubmit={this.handleSubmit} align="center"
      style={{ fontSize: 14 }}>
        <div>Please enter a Number</div>
        <input
          name="inputNumber"
          value={inputNumber} 
          type="text"
          pattern="[0-9]*" 
          placeholder="Enter Prime Number" 
          required
          onChange={this.handleChange}
        />
        <div style={{ fontSize: 12, color: "red" }}>
              {this.state.inputNumberError}</div>
        <button type="submit">submit</button>
        <p>
         Result:{JSON.stringify(apiResults,null,2)}
        </p>
    	</form>
    );
  }
}
