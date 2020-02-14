import React, { Component } from "react";
import CircleSelector from "./components/CircleSelector/CircleSelector";
import Circles from "./components/Circles/Circles";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "circle1"
    };
  }

  handleClick = e => {
    console.log(e.target.name);
    this.setState({
      selected: e.target.name
    });
  };

  render(props) {
    return (
      <div className='App'>
        <header className='App-header'>UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            selected={this.state.selected}
            handleClick={this.handleClick}
          />
          <Circles selected={this.state.selected} />
        </main>
      </div>
    );
  }
}

export default App;
