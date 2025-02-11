import { Layout } from "antd";
import HeaderApp from "./headers/header";
import HomePage from "./homes/dealngonmoingay/HomePage";
import HomePageNew from "./homes/news/HomePage";
import HomePageClassify from "./homes/classify/HomePage";

const { Content, Footer } = Layout;
const HomeScreen = () => {
  return (
    <div>
      <Layout>
        <HeaderApp/>
           
        <Content style={{  minHeight: "80vh" }}>
          <img src="/biastore.png" alt="bia beo store" />
          <div className="m-4">
          <HomePage/>
          <HomePageNew/>
          <HomePageClassify/>
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          ©2024 Created by WIND DEV 
          <hr />
          CALL or ZALO:0383.299.526
        </Footer>
      </Layout>
    </div>
  );
};

export default HomeScreen;

