import React from 'react';
import {
   Button,
   Col,
   Row,
   Statistic,
   Typography
} from 'antd';
import {
   ArrowRightOutlined
} from '@ant-design/icons';

export default function ShopPayTotal({ carts }) {
   const totalPrice = carts.reduce((prev, cur) => prev + (cur.price * cur.qty), 0);
   const totalQty = carts.reduce((prev, cur) => prev + cur.qty, 0);

   return (
      <Row justify='space-between' style={{ marginTop: '15px' }} >
         <Col >
            <Statistic
               prefix='฿'
               precision={2}
               value={totalPrice}
               valueStyle={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#FF0270'
               }}
            />

            <Typography>รวมทั้งสิ้น : {totalQty} หน่วย</Typography>
         </Col>

         <Col >
            <Button
               type='primary'
               size='large'
               style={{ height: '100%' }}
            >
               ชำระเงิน <ArrowRightOutlined style={{ marginLeft: '20px' }} />
            </Button>
         </Col>
      </Row>
   )
};
