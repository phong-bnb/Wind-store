import React from "react";
import { Layout } from "antd";
import HeaderApp from "../header";

const { Header, Content, Footer } = Layout;
const HomeScreen = () => {
  return (
    <div>
      <Layout>
        <HeaderApp/>

        <Content style={{ padding: "20px", minHeight: "80vh" }}>
          <h1>Main Content</h1>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          ©2024 Created by MyApp Team
        </Footer>
      </Layout>
    </div>
  );
};

export default HomeScreen;
