import React from "react";
import "./Rightbar.css";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import IosShareIcon from "@mui/icons-material/IosShare";
import LogoutIcon from "@mui/icons-material/Logout";

const Rightbar = () => {
  return (
    <div className="Rightbar">
      <div className="btnbar">
        <select className="avldrop">
          <option label="Avalanche" />
        </select>
        <select className="walldrop">
          <option label="0XF6...1353"></option>
        </select>
      </div>
      <div className="customlink">
        <p
          style={{
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "24px",
            color: "#FFFFFF",
          }}
        >
          <KeyboardBackspaceIcon
            sx={{
              color: "white",
              alignSelf: "center",
              marginLeft: 5,
              marginRight: 2,
              marginBottom: -0.6,
            }}
          />
          Custom Link
        </p>
        <p
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "48px",
            letterSpacing: "-1px",
            marginLeft: 50,
            marginTop: 0,
            color: "#FFFFFF",
          }}
        >
          https://testnet.xyz.xyz/trade?ref=
        </p>
        <input placeholder="ENTER" className="inputenter" />
      </div>
      <div className="twobtns">
        <button className="btnlink2">
          <IosShareIcon sx={{ fontSize: 18, margin: "0px 2px 4px 0px" }} />
          Custom Link
        </button>
        <button className="btncancel">
          <LogoutIcon sx={{ fontSize: 18, margin: "0px 4px 0px 0px" }} /> Cancel
        </button>
      </div>
    </div>
  );
};

export default Rightbar;
