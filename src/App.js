import React , { Component } from 'react';

class App extends Component {
  render(){
    return( 
      <React.Fragment>
	<label htmlFor="bar">bar</label>
	<input className="text" type="text" onClick={() => {console.log("I am clicked!!")}} />
      </React.Fragment>
	)
  }
}

const Cry = () => {
  return (
    <div>
      <Cat />
      <Cat />
    </div>
)
}

const Cat = () =>{
  return <h1>Meow!!</h1>
}

export default Cry;
