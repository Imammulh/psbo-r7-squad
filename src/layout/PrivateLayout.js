import { Route, Switch } from 'react-router';
import 'antd/dist/antd.css';

import SiderMenu from '../components/Menu/SiderMenu';
import HeaderMenu from '../components/Menu/HeaderMenu';
import Dashboard from '../pages/user/Dashboard';
import Biodata from '../pages/user/Biodata';
import PengajuanInsentif from '../pages/user/PengajuanInsentif';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function PrivateLayout() {
  return (
    <Layout>
      <SiderMenu />
      <Layout style={{ marginLeft: 250 }}>
        <HeaderMenu />
        <Content style={{ margin: '24px 16px 24px', overflow: 'initial', backgroundColor: 'white' }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/biodata" component={Biodata} />
              <Route path="/pengajuan-insentif" component={PengajuanInsentif} />
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default PrivateLayout;
