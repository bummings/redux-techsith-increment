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
    age: state.age
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP" }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
