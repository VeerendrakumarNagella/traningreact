import { Component } from "react";
import LogoImage from "../../assets/images/hero-logo.webp";

class Header extends Component {
  constructor(props) {
    super(props);
    this.userData = {
      name: "Ramu Gangula",
      age: "29",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.getUserData(this.userData);
  }

  render() {
    return (
      <header className="header content-wrapper">
        <div className="hero-content">
          <img src={LogoImage} alt="Banner" />
          <h2>{this.props.brandName}</h2>
        </div>
        <div className="action-items">
          <button onClick={this.handleClick}>Login</button>
          <button>Sign Up</button>
        </div>
      </header>
    );
  }
}

export default Header;
