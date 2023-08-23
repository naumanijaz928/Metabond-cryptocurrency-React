import React, { useState } from "react";
import Navbar from "./Navbar";
import SideBar from './Sidebar';
import "./styles.scss";

import { Layout } from 'antd';


export default function PersistentDrawerLeft({ children, ...rest }) {
  const { Header, Content, Footer } = Layout;


  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <SideBar />
        <Layout className="site-layout">
          {/* <Header style={{ padding: 0, margin: 0 }} > */}
            <Navbar />
          {/* </Header> */}
          <Content>
            <div>
              {children}
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>By Numan ijaz</Footer> */}
        </Layout>
      </Layout>
      {/* <div className="main_box">
        <Layout>
          <SideBar />
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0,background:"#fff" }}>
              <Navbar />
            </Header>
            <Content
              className="site-layout-background"
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </div> */}
    </>
  );
}
