import React from 'react'
import {
   Col,
   Row,
   Typography
} from 'antd';
import NewProductCard from './NewProductCard';


export default function NewProducts({ newProducts }) {
   return (
      <div style={{ padding: '10px' }}>
         <Typography.Title level={5}>NEW PRODUCTS</Typography.Title>
         <Row gutter={[0, 8]}>
            {newProducts.map((item, idx) =>
               <Col xs={24} key={idx}>
                  <NewProductCard products={item} />
               </Col>
            )}
         </Row>
      </div>
   )
};
