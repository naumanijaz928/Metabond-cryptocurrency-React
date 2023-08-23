import React, { lazy } from "react";
import {
  UserOutlined,
  MailOutlined,
  SettingOutlined,
  EditOutlined,
  HomeOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

const Home = lazy(() => import("../../views/private/Home"));
const Blog = lazy(() => import("../../views/private/Blog"));
const About = lazy(() => import("../../views/private/About"));
const RealMode = lazy(() => import("../../views/private/RealMode"));

export const routes = [
  {
    id: "home",
    icon: <HomeOutlined />,
    route: "/home",
    title: "Home",
    component: Home,
  },
  {
    id: 1,
    icon: <LineChartOutlined />,
    route: "/blog",
    title: "Blog",
    component: Blog,
  },

  {
    id: 2,
    icon: <UserOutlined />,
    route: "/about",
    title: "About us",
    component: About
  },
  {
    id: 3,
    icon: <UserOutlined />,
    route: "/form",
    title: "Form step",
    component: RealMode
  },
];
