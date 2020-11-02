import React from "react";
// import { useStateValue } from '../../context/StateProvider'

import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospital from "@material-ui/icons/LocalHospitalRounded";
import EmojiFlags from "@material-ui/icons/EmojiFlagsRounded";
import People from "@material-ui/icons/PeopleRounded";
import Chat from "@material-ui/icons/ChatRounded";
import Marketplace from "@material-ui/icons/StorefrontRounded";
import Watch from "@material-ui/icons/SubscriptionsOutlined";
import ExpandMore from "@material-ui/icons/ExpandMoreRounded";

const Sidebar = () => {
  // const [{user}, dispatch] = useStateValue()

  return (
    <div className="sidebar">
      <SidebarRow src="" title="Andrew Nwachuku" />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Marketplace} title="Marketplace" />
      <SidebarRow Icon={Watch} title="Watch" />
      <SidebarRow Icon={ExpandMore} title="See More" />
    </div>
  );
};

export default Sidebar;
