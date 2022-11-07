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
import CarouselSlick from '../components/CarouselSlick';
import { categories } from '../mockup/data';
import { imageSlide } from '../mockup/data';
import { newProducts } from '../mockup/data';
import { products } from '../mockup/data';
import CartShopping from '../components/CartShopping';
import NewProducts from '../components/NewProducts';
import Products from '../components/Products';

const { Header, Footer, Sider, Content } = Layout;


const capitalize = (txt) => {
   const st = txt[0].toUpperCase();
   const newTxt = txt.slice(1);
   const result = st + newTxt;
   return result;
};


export default function Home() {
   return (
      <Layout>
         {/* <Header
            style={{ background: '#fff' }}
         > */}
         <Row style={{ padding: '20px 24px' }} gutter={[24, 24]}>
            <Col xs={24}>
               <Row justify='space-between' >
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

            {categories.map(cat =>
               <Col key={cat.key} >
                  <Button
                     type='text'
                  >
                     {capitalize(cat.value)}
                  </Button>
               </Col>
            )}

            <Col xs={24}>
               <CarouselSlick imageSlide={imageSlide} />
            </Col>
         </Row>
         {/* </Header> */}

         <Layout style={{ padding: '20px 24px' }} gutter={[24, 24]}>
            <Sider style={{ background: 'lightblue' }}>
               <CartShopping />
               <NewProducts newProducts={newProducts} />
            </Sider>

            <Content>
               <Products products={products} />
            </Content>
         </Layout>

      </Layout>
   )
};
