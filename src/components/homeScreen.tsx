import React from "react";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;
const HomeScreen = () => {
  return (
    <div>
      <Layout>
        <Header style={{ backgroundColor: "#4d5053", padding: "0 20px" }}>
          <div
            style={{ color: "#fff", fontWeight: "bold", fontSize: "18px" }}
            className="flex justify-between"
          >
            MyApp
                      <div>
                          <button>
                              
                          </button>
           </div>
          </div>
        </Header>

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
