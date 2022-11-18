import React from 'react';
import { Col, Row, Typography } from 'antd';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

export default function Products({ products, carts, setCarts }) {

   // console.log('products=>', products);
   return (
      <motion.div style={{ padding: '10px' }}  >
         <Typography.Title level={5}>FEATURED PRODUCTS</Typography.Title>
         <Row gutter={[8, 8]}>
            {products.map((item, idx) =>
               <Col xs={24} sm={12} md={6} key={idx}>
                  <ProductCard
                     product={item}
                     carts={carts}
                     setCarts={setCarts}
                  />
               </Col>
            )}
         </Row>
      </motion.div>
   )
};
