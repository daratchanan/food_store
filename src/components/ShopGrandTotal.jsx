import React from 'react';
import {
   Col,
   Row,
   Statistic,
   Typography
} from 'antd';

export default function ShopGrandTotal({ carts }) {
   const totalPrice = carts.reduce((prev, cur) => prev + (cur.price * cur.qty), 0)

   return (
      <Row justify='space-between' style={{ marginTop: '15px' }}>
         <Col>
            <Typography.Text
               style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#FF0270'
               }}
            >
               Grand Total
            </Typography.Text>
         </Col>
         <Col>
            <Statistic
               prefix='฿'
               precision={2}
               value={totalPrice}
               valueStyle={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#FF0270'
               }}
            />
         </Col>
      </Row>
   )
};
