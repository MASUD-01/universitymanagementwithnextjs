"use client";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { sidebarItems } from "@/constants/sidebarItems";
// import { getUserInfo } from "@/services/auth.service";
// import { userinfo } from "@/types";
const { Sider } = Layout;
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  //const roles = USER_ROLE.ADMIN;
  const role = "admin";
  // const { role } = getUserInfo() as userinfo;
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div>UMS</div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
