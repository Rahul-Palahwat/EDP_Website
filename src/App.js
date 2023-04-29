import "./App.css";
import Logo from "./images/logo1.png";
import bubble from "./images/bubble.png";
import Equipments from "./components/Equipments/Equipments";

function App() {
  return (
    <div className="hero">
      <div className="navbar">
        <img src={Logo} alt="" className="logo" />
        {/* <button type="button">Sign Up</button> */}
      </div>
      <div className="content">
        <small>Welcome to your</small>
        <h1>
          Ultimate
          <br /> Smart
          <br /> Home Automation System
        </h1>
      </div>
      <div className="side-bar">
        <Equipments />
        {/* <img src={Menu} alt="" className="menu" />
        <div className="social-links">
          <img src={fb} alt="" />
          <img src={ig} alt="" />
          <img src={tw} alt="" />
        </div>

        <div className="useful-links">
          <img src={share} alt="" />
          <img src={info} alt="" />
        </div> */}
      </div>

      <div className="bubbles">
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
      </div>
      {/* <div className="components">
        <div className="equip">
          <div className="items">
            <h2>Equipments</h2>
          </div>
          <Equipments />
        </div>
      </div> */}
    </div>
  );
}

export default App;
