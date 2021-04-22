import React, { Component } from "react";
import { connect } from "react-redux";

class TodosContainer extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return { state: state.todos };
};

export default connect(mapStateToProps)(TodosContainer);
