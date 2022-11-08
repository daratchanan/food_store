import React from 'react';
import { Col, Row, Typography } from 'antd';
import ProductCard from './ProductCard';

export default function Products({ products, cart, setCart }) {

   // console.log('products=>', products);
   return (
      <div style={{ padding: '10px' }}>
         <Typography.Title level={5}>FEATURED PRODUCTS</Typography.Title>
         <Row gutter={[8, 8]}>
            {products.map((item, idx) =>
               <Col xs={24} sm={12} md={6} key={idx}>
                  <ProductCard
                     product={item}
                     cart={cart}
                     setCart={setCart}
                  />
               </Col>
            )}
         </Row>
      </div>
   )
}
