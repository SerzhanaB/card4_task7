import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true, name: "Иван" };
  }

  render() {
    const Show = this.state.show;
    return (
      <div className="App"> 
        {Show === true ? (
          <p>Привет, {this.state.name}!</p>
        ) : (
          <p>Пока, {this.state.name}!</p>
        )}
      </div>
    );
  }
}
export default App;
