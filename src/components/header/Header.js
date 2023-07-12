import { Component } from "react";
import LogoImage from "../../assets/images/hero-logo.webp";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

class Header extends Component {
  constructor(props) {
    super(props);
    this.userData = {
      name: "narendra babu",
      age: "29",
    };

    this.state = {
      isButtonsDisplay: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  // without arrow fucntion using this bind
  handleClick() {
    this.props.getUserData(this.userData);
  }

  // with arrow fucntion no need to bind this
  handleToggle = () => {
    this.setState({
      isButtonsDisplay: !this.state.isButtonsDisplay,
    });
  };

  render() {
    return (
      <header className="header content-wrapper">
        <div className="hero-content">
          <img src={LogoImage} alt="Banner" />
          <h2>{this.props.brandName}</h2>
        </div>
        <button onClick={this.handleToggle}>Toggle</button>
        <div className="action-items">
          {this.state.isButtonsDisplay ? (
            <Login handleClick={this.handleClick} />
          ) : (
            <Signup handleClick={this.handleClick} />
          )}
        </div>
      </header>
    );
  }
}

export default Header;
