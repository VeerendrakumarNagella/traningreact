import { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    console.log("From constructor");
    this.state = {
      buttonLabel: "Login",
      name: "test",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        buttonLabel: "Login",
      });
    }, 200);
    console.log("From mount");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("From getDerivedStateFromProps");
    state.buttonLabel = "Login";
    return { props, state };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("From update", prevState, this.state);
    if (prevState.buttonLabel !== this.state.buttonLabel) {
      console.log("button label has been updated");
      this.setState({
        name: "Test updated",
      });
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("From shouldComponentUpdate");
  //   if (
  //     this.state.buttonLabel !== nextState.buttonLabel ||
  //     this.state.name !== nextState.name
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }

  componentWillUnmount() {
    console.log("From unmount");
  }

  render() {
    console.log("From render", this.state);
    return (
      <button onClick={this.props.handleClick}>{this.state.buttonLabel}</button>
    );
  }
}

export default Login;

// mounting, updation, unmount

/* constructor, getDerivedStateFromProps, intial render, didmount, shouldComponentUpdate, re render, didupdate, 
       re render, didupdate, re render, did update .......  unmount */
