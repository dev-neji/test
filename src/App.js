//import Button from "react-bootstrap/Button";
import "./Header.css";
//import Web3 from "web3";
//import { ethers } from "ethers";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Connect from "./Pages/Connect";
import Load from "./Pages/Load";
import Swap from "./Pages/Swap";
import ErrorPage from "./Pages/ErrorPage";
import Logo from "./robinhood.svg";
import { SearchOutlined } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    avatar: {},
  };
});

const walletpfp =
  "https://cdn.discordapp.com/attachments/756874543158788097/973233336673783879/images.jpeg";

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={Logo} width={30} />
        </div>
        <div className="header__search">
          <div className="header__searchContainer">
            <input placeholder="Enter Swap Code" type="text" />
            <SearchOutlined />
          </div>
        </div>
        <div className="header__menuItems">
          <a href="/">Home</a>
          <a href="/connect">Trade</a>
          <a href="/listings">Listings</a>
          <a href="/load">Load</a>
          <a href="/faq">FAQ</a>
          <label
            class="walletDCon"
            id="wallet-id"
            style={{
              paddingTop: "10px",
              fontWeight: "bold",
              marginRight: "40px",
              marginLeft: "40px",
              position: "relative",
              border: "1px solid #31363A",
                padding: "7px",
                paddingLeft: "70px",
                paddingRight: "70px",
                borderRadius: "4px",
            }}
          >
            WALLET NOT CONNECTED
          </label>

          <Avatar src={walletpfp} style={{ paddingBottom: "0px" }} />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/load" element={<Load />} />
        <Route path="/listings" element={<></>} />
        <Route path="/swap/:swapcode" element={<Swap />} />
        <Route path="/faq" element={<></>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div>Footer</div>
    </Router>
  );
}

export default App;
