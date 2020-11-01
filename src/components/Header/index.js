import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import Search from "@material-ui/icons/Search";
import Home from "@material-ui/icons/HomeRounded";
import Watch from "@material-ui/icons/SubscriptionsRounded";
import Marketplace from "@material-ui/icons/StorefrontRounded";
import Groups from "@material-ui/icons/SupervisedUserCircleRounded";
import Pages from "@material-ui/icons/FlagRounded";
import Menu from "@material-ui/icons/MenuRounded";
import Add from "@material-ui/icons/AddRounded";
import Messenger from "@material-ui/icons/ForumRounded";
import Notifications from "@material-ui/icons/NotificationsRounded";
import ExpandMore from "@material-ui/icons/ExpandMoreRounded";
import { Avatar, IconButton } from "@material-ui/core";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="facebook" />
        <div className="header__input">
          <Search />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option">
          <Home />
        </div>
        <div className="header__option">
          <Watch />
        </div>
        <div className="header__option">
          <Marketplace />
        </div>
        <div className="header__option">
          <Groups />
        </div>
        <div className="header__option">
          <Pages />
        </div>
        <div className="header__option">
          <Menu />
        </div>
      </div>
      <div className="header__right">
        <div className="headerInfo">
          <Avatar />
          <h4>Andrew</h4>
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Messenger />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
