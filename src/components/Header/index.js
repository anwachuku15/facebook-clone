import React from "react";
import "./Header.css";
import { useStateValue } from "../../context/StateProvider";
import logo from "../../assets/logo.png";
import Search from "@material-ui/icons/Search";
import Home from "@material-ui/icons/HomeRounded";
import Watch from "@material-ui/icons/SubscriptionsOutlined";
import Marketplace from "@material-ui/icons/StorefrontRounded";
import Groups from "@material-ui/icons/SupervisedUserCircleRounded";
import Pages from "@material-ui/icons/FlagRounded";
import Menu from "@material-ui/icons/MenuRounded";
import Add from "@material-ui/icons/AddRounded";
import Messenger from "@material-ui/icons/ForumRounded";
import Notifications from "@material-ui/icons/NotificationsRounded";
import ExpandMore from "@material-ui/icons/ExpandMoreRounded";
import { Avatar, IconButton } from "@material-ui/core";
import avi from "../../assets/andrew.jpg";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  const name = user.displayName.split(" ");
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
        <div className="header__option header__option--active">
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
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{name[0]}</h4>
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
