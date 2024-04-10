import React from 'react';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

const { Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header/>
      <Sidebar />
      <Navbar/>
      <Cards/>
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ padding: '20px' }}>
          {/* Your main content here */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;