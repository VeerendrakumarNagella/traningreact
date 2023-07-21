import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      errorInfo: errorInfo,
    });
  }

  render() {
    return (
      <>
        {this.state.errorInfo ? (
          <section className="error">
            <h2>Something went wrong</h2>
            <br />
            <p>Please try again after some time</p>
          </section>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}

export default ErrorBoundary;
