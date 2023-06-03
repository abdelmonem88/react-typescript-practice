import React, { Component } from "react";

type Props = {
  render: (count: number, handleIncrease: () => void) => JSX.Element;
};

type State = {};

export default class RenderPropsWrapper extends Component<Props, State> {
  state = {
    count: 0,
  };

  handleIncrease = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>{this.props.render(this.state.count, this.handleIncrease)}</div>
    );
  }
}
