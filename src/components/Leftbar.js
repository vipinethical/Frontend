import React from "react";
import "./Leftbar.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TimelineIcon from "@mui/icons-material/Timeline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import PieChartIcon from "@mui/icons-material/PieChart";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import ShareIcon from "@mui/icons-material/Share";
import ArticleIcon from "@mui/icons-material/Article";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 32,
  padding: 7,

  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(23px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="profilebar">
        <button className="profilebtn">N</button>
        <h2 className="name">Name</h2>
        <KeyboardBackspaceIcon
          sx={{
            fontSize: 28,
            color: "white",
            alignSelf: "center",
            marginLeft: 6,
          }}
        />
      </div>
      <div className="menu">
        <MenuIcon
          sx={{
            alignSelf: "center",
            color: "#808191",
            margin: "0px 20px 0px 30px",
          }}
        />
        <p className="menutext">Home</p>
      </div>
      <div className="menu">
        <AnalyticsIcon
          sx={{
            alignSelf: "center",
            color: "#808191",
            margin: "0px 20px 0px 30px",
          }}
        />
        <p className="menutext">Section 1</p>
      </div>
      <div className="menu">
        <GraphicEqIcon
          sx={{
            alignSelf: "center",
            color: "#808191",
            margin: "0px 20px 0px 30px",
          }}
        />
        <p className="menutext">Section 2</p>
      </div>
      <div className="menu">
        <TimelineIcon
          sx={{
            alignSelf: "center",
            color: "#808191",
            margin: "0px 20px 0px 30px",
          }}
        />
        <p className="menutext">Section 3</p>
      </div>
      <div className="menu">
        <MonetizationOnIcon
          sx={{
            alignSelf: "center",
            color: "#808191",
            margin: "0px 20px 0px 30px",
          }}
        />
        <p className="menutext">Section 4</p>
      </div>
      <div className="menu">
        <ViewStreamIcon
          sx={{
            alignSelf: "center",
            color: "#808191",
            margin: "0px 20px 0px 30px",
          }}
        />
        <p className="menutext">Section 5</p>
      </div>
      <div className="menu">
        <PieChartIcon
          sx={{
            alignSelf: "center",
            color: "#808191",
            margin: "0px 20px 0px 30px",
          }}
        />
        <p className="menutext">Section 6</p>
      </div>
      <div className="menu">
        <StackedBarChartIcon
          sx={{
            alignSelf: "center",
            color: "#808191",
            margin: "0px 20px 0px 30px",
          }}
        />
        <p className="menutext">Section 7</p>
      </div>
      <div className="menu">
        <ShareIcon
          sx={{
            alignSelf: "center",
            color: "#808191",
            margin: "0px 20px 0px 30px",
          }}
        />
        <p className="menutext">Section 8</p>
      </div>
      <div className="menu">
        <ArticleIcon
          sx={{
            alignSelf: "center",
            color: "#808191",
            margin: "0px 20px 0px 30px",
          }}
        />
        <p className="menutext">Documentation</p>
      </div>
      <div className="buttondiv">
        <button className="btnrate">$0.90</button>
        <button className="btnbuy">Buy $XYZ</button>
      </div>
      <div className="togglebar">
        <LanguageIcon sx={{ color: "#808191", fontSize: 29, marginRight: 1 }} />
        <MaterialUISwitch />
      </div>
    </div>
  );
};

export default Leftbar;
