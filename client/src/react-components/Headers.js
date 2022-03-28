import React from "react";
import "./Headers.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
// icon button is us for to implement icon button functionality
import TinderIcon from "../Images/tinder-logo.png";
import ForumIcon from "@material-ui/icons/Forum";

const Headers = () => {
  return (
    <>
      <div className="header">
        <IconButton>
          <PersonIcon fontSize="large" className="header_icon" />
        </IconButton>
        <img className="header_logo" src={TinderIcon} alt="" />
        <IconButton>
          <ForumIcon fontSize="large" className="header_icon" />
        </IconButton>
      </div>
    </>
  );
};

export default Headers;
