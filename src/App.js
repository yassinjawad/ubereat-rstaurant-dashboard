import { Layout, Image } from "antd";
import SideMenu from '../src/components/SideMenu';
import AppRoutes from "./components/AppRoutes";

const {Sider, Content, Footer} = Layout;

function App() {
  return (
    <Layout>
      <Sider style={{ height: "100vh", backgroundColor: 'white'}}>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Uber_Eats.png" preview={false}/>
      <SideMenu />
      </Sider>
      <Layout>
        <Content >
          <AppRoutes />
        </Content>
      
      <Footer style={{textAlign: 'center'}}>
        Uber Eats Restaurant Dashboard @2025
      </Footer>
      </Layout>

    </Layout>
  );
}
 
export default App;
