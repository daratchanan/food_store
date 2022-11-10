import React, { useState } from 'react';
import {
   Badge,
   Button,
   Col,
   Drawer,
   Row,
   Statistic,
   Typography
} from 'antd';
import {
   ShoppingCartOutlined
} from '@ant-design/icons';
import CardOrder from './CardOrder';

export default function ShoppingCart({ carts }) {
   const [open, setOpen] = useState(false);

   const totalQty = carts.reduce((prev, cur) => prev + cur.qty, 0);
   const totalPrice = carts.reduce((prev, cur) => prev + (cur.price * cur.qty), 0)

   return (
      <Row justify='end'>
         <Col>
            <Badge
               count={totalQty}
               offset={[0, 5]}
               showZero={totalQty === 0}
            >
               <Button
                  type='text'
                  icon={<ShoppingCartOutlined style={{ fontSize: '30px' }} />}
                  style={{ background: 'none' }}
                  onClick={() => setOpen(true)}
               >
               </Button>
               <Drawer
                  title="รายการอาหาร"
                  placement="right"
                  onClose={() => setOpen(false)}
                  open={open}
               >
                  
                  <CardOrder carts={carts} />

                  <Row justify='space-between'>
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
                           prefix='$'
                           value={totalPrice}
                           valueStyle={{
                              fontSize: '16px',
                              fontWeight: 'bold',
                              color: '#FF0270'
                           }}
                        />
                     </Col>
                  </Row>

               </Drawer>
            </Badge>

         </Col>
      </Row>
   )
};
