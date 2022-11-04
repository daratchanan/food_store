import React from 'react';
import {
   Button,
   Col,
   Input,
   Layout,
   Row,
   Space
} from 'antd';
import {
   ShoppingCartOutlined
} from '@ant-design/icons';
import logo from '../assets/logo.jpg';


const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
   return (
      <Layout>
         {/* <Header
            style={{ background: '#fff' }}
         > */}
         <Row style={{ padding: '0px 24px' }}>
            <Col xs={24}>
               <Row justify='space-between'>
                  <Col>
                     <img
                        src={logo}
                        alt='logo'
                     />
                  </Col>
                  <Col>
                     <Space direction='vertical'>
                        <Input.Search
                           placeholder="input search text"
                           // onSearch={onSearch}
                           style={{
                              width: 200,
                           }}
                        />
                        <Row justify='end'>
                           <Col>
                              <ShoppingCartOutlined style={{ fontSize: '20px' }} />
                           </Col>
                        </Row>
                     </Space>
                  </Col>
               </Row>
            </Col>

            <Col>
               <Button>cake</Button>
            </Col>
         </Row>
         {/* </Header> */}

         {/* <Layout>
            <Sider style={{ background: 'lightblue' }}>Sider</Sider>
            <Content>Content</Content>
         </Layout> */}

      </Layout>
   )
};
