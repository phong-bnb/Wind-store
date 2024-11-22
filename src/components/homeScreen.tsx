import { Layout } from "antd";
import HeaderApp from "../header";
import HomePage from "./homes/dealngonmoingay/HomePage";
import HomePageNew from "./homes/news/HomePage";

const { Content, Footer } = Layout;
const HomeScreen = () => {
  return (
    <div>
      <Layout>
        <HeaderApp/>

        <Content style={{ padding: "20px", minHeight: "80vh" }}>
          <HomePage/>
          <HomePageNew/>
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

