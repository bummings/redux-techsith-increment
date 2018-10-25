import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  // damn man where's all yr state
  // oh wait you using REDUX, huh??

  render() {
    return (
      <div className="App">
        <div>
          Age: <span>{this.props.age}</span>
        </div>

        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    state: state.history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
