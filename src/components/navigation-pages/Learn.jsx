import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <div className="learn-content">
      <nav className="learn-nav-items">
        <h5 className="get-started-sec">GET STRATED</h5>
        <div className="top-ul-items">
          <ul>
            <li>
              <Link to="/learn">Quick Start</Link>
            </li>
            <li>
              <Link to="/tutorial-tic-tac-toe">Tutorial: Tic-Tac-Toe</Link>
            </li>
            <li>
              <Link to="/thinking-in-react">Thinking in React</Link>
            </li>
            <li>
              <Link to="/installation">Installation</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="bottom-ul-items">
          <h5>LEARN REACT</h5>
          <ul>
            <li>
              <Link to="/describing-the-ui">Describing the UI</Link>
            </li>
            <li>
              <Link to="/adding-interactivity">Adding Interactivity</Link>
            </li>
            <li>
              <li role="separator"></li>
              <Link to="/managing-state">Managing State</Link>
            </li>
            <li>
              <Link to="/escape-hatches">Escape Hatches</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Learn;
