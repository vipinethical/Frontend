import React, { useEffect, useState } from "react";
import "./Body.css";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import bit from "../images/bit.png";
import CloseIcon from "@mui/icons-material/Close";
import IosShareIcon from "@mui/icons-material/IosShare";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import axios from "axios";

const Body = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`https://raw.githubusercontent.com/akshita151199/APIs/main/data`)
      .then((res) => {
        const response = res.data.data;
        console.log(response);
        setData(response);
      });
  }, []);
  return (
    <div className="body">
      <div className="section">
        <p className="sectiontext">Section</p>
        <div className="wallet">
          <AccountBalanceWalletIcon
            sx={{ color: " #3772FF", height: "20px", width: "25px" }}
          />
          <p className="balancetext">0.2 $XYZ</p>
          <p className="tiertext">Tier 1</p>
        </div>
      </div>
      <div className="lorem">
        <div className="bluediv">
          <p className="loremtxt">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="btntut">Tutorial</button>
          <img src={bit} className="bitimg" />
          <CloseIcon
            sx={{
              position: "absolute",
              background: "#ffffff",
              borderRadius: 3,
              left: "98.2%",
              right: "0%",
              top: "-8%",
              bottom: "76.63%",
              fontSize: 21,
            }}
          />
        </div>
      </div>
      <div className="rewarddiv">
        <div className="rewardbox">
          <p className="rewardtxt">Your Rewards</p>
          <h2 className="balancetxt">$ 0.26231428</h2>
          <div className="balance">
            <p className="threebox">$40 AVAX</p>
            <p className="threebox">$10 BNB</p>
            <p className="threebox">$210 BTC</p>
          </div>
          <button className="btnclink">
            <IosShareIcon sx={{ fontSize: 18, margin: "0px 2px 4px 0px" }} />
            Custom link
          </button>
        </div>
      </div>
      <div className="referaldiv">
        <div className="referalbox">
          <h4 className="heading1">
            <LocalAtmIcon sx={{ marginRight: 1, color: "#BBB5E2" }} />
            12.5% of fee
          </h4>
          <p style={{ color: "#808191" }}>Your Referral Link for xyz</p>
          <div className="referallink">
            <p style={{ display: "flex", alignItems: "center" }}>
              https://unityexchange.design
              <ContentCopyIcon
                sx={{
                  fontSize: 20,
                  margin: "0px 0px 0px 90px",
                  alignSelf: "center",
                }}
              />
            </p>
          </div>
        </div>
        <div className="referalbox">
          <h4 className="heading1">
            <LocalAtmIcon
              sx={{
                marginRight: 1,
                color: "#BBB5E2",
              }}
            />
            12.5% of fee
          </h4>
          <p style={{ color: "#808191" }}>Your Referral Link for xyz</p>
          <div className="referallink">
            <p style={{ display: "flex", alignItems: "center" }}>
              https://unityexchange.design
              <ContentCopyIcon
                sx={{
                  fontSize: 20,
                  margin: "0px 0px 0px 90px",
                  alignSelf: "center",
                }}
              />
            </p>
          </div>
        </div>
      </div>
      <div className="tabs">
        <p className="tabtext1">First Tab</p>
        <p className="tabtext2">Second Tab</p>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <th>Asset</th>
            <th>Amount</th>
            <th>User Account</th>
            <th>Refferal Earning</th>
          </thead>
          <tbody>
            {data &&
              data.map((row, id) => {
                return (
                  <tr key={id}>
                    <td>
                      <img src={row.img} className="bitimg2" />
                      <div className="assetdiv">
                        <p className="uppertext">{row.asset}</p>
                        <br />
                        <p className="downtext">
                          {row.type} &nbsp;
                          <img src={row.chain.img} /> {row.chain.name}
                        </p>
                      </div>
                    </td>
                    <td>
                      <p className="uppertext">{row.amount}</p>
                      <br />
                      <h6 className="downtext">{row.state}</h6>
                    </td>
                    <td>
                      <p className="uppertext"> {row.user}</p>
                    </td>
                    <td>
                      <p className="uppertext">{row.referral_earnings}</p>
                      <br />
                      <p className="downtext">
                        view on Bsc scan{" "}
                        <IosShareIcon
                          sx={{ fontSize: 18, margin: "1px 0px -1px 0px" }}
                        />
                      </p>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Body;
