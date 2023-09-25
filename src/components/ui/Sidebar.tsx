"use client";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { sidebarItems } from "@/constants/sidebarItems";
import { USER_ROLE } from "@/constants/role";
const { Sider } = Layout;
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const role = USER_ROLE.ADMIN;
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
      <div>PH University</div>
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
