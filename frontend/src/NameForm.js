import React from 'react';

const initialState = {
  inputNumber: '',
  inputNumberError:'',
  result:''
};

export default class Form extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      inputNumber: '',
      inputNumberError:'',
      result:''
    }
  }
  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };
  
  validate = () => {
    let inputNumberError = '';
    let temp=parseInt(this.state.inputNumber,10);

    if (!(temp<100)) {
      inputNumberError = 'Input cannot exceed 100';
    }

    if (inputNumberError) {
      this.setState({ inputNumberError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("input"+this.state.inputNumber);
   const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
     }
  };

	render() {
  	return (
      <form onSubmit={this.handleSubmit}>
        <div>Please enter a Number</div>
        <input
          name="inputNumber" 
          type="text"
          pattern="[0-9]*" 
          placeholder="Enter Prime Number" 
          required
          onChange={this.handleChange}
        />
          <div style={{ fontSize: 12, color: "red" }}>
              {this.state.inputNumberError}</div>
        <button type="submit">submit</button>
    	</form>
    );
  }
}

