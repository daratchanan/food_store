import React from 'react';
import {
   Col,
   Row,
   Typography
} from 'antd';

export default function NewProductCard({ products }) {
   return (
         <Row >
            <Col xs={24}>
               <Row gutter={[16, 0]}>
                  <Col xs={12} >
                     <img
                        src={products.img}
                        alt={products.name}
                        width='100%'
                        style={{border: '2px solid lightgrey'}}
                     />
                  </Col>
                  <Col xs={12}>
                     <Typography.Paragraph style={{ marginBottom: '4px' }}>{products.name}</Typography.Paragraph>
                     <Typography.Paragraph style={{ fontWeight: 'bold' }}>$ {products.price}</Typography.Paragraph>
                  </Col>
               </Row>
            </Col>
         </Row>
   )
};
