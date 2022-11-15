import React, { useState } from 'react';
import {
   Button,
   Col,
   Input,
   Layout,
   Row,
   Space
} from 'antd';
import logo from '../assets/logo.jpg';
import CarouselSlick from '../components/CarouselSlick';
import { categories } from '../mockup/data';
import { imageSlide } from '../mockup/data';
import { newProducts } from '../mockup/data';
import { products } from '../mockup/data';
import CartTotal from '../components/CartTotal';
import NewProducts from '../components/NewProducts';
import Products from '../components/Products';
import ShoppingCart from '../components/ShoppingCart';

const { Header, Footer, Sider, Content } = Layout;


const capitalize = (txt) => {
   const st = txt[0].toUpperCase();
   const newTxt = txt.slice(1);
   const result = st + newTxt;
   return result;
};


export default function Home() {
   const [carts, setCarts] = useState([]);
   const [data, setData] = useState(products);

   const onClick = (cat) => {
      // console.log('cat=>', cat);
      if (cat.value !== 'all') {
         const targetCategory = products.filter(f => f.category === cat.value);
         setData(targetCategory);
      } else {
         setData(products)
      };
   };
   console.log('products=>', products);
   console.log('data=>', data);
   // console.log('filterData=>', filterData);


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
                              marginBottom: '20px'
                           }}
                        />

                        <ShoppingCart carts={carts} setCarts={setCarts} />

                     </Space>
                  </Col>
               </Row>
            </Col>

            {categories.map(cat =>
               <Col key={cat.key} >
                  <Button
                     type='text'
                     onClick={() => onClick(cat)}
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
               <CartTotal carts={carts} />
               <NewProducts newProducts={newProducts} />
            </Sider>

            <Content>
               <Products
                  products={data}
                  carts={carts}
                  setCarts={setCarts}
               />
            </Content>
         </Layout>

      </Layout>
   )
};
