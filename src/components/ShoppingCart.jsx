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
import ShopGrandTotal from './ShopGrandTotal';
import ShopPayTotal from './ShopPayTotal';
import CardOrderNew from './CardOrderNew';

export default function ShoppingCart({ carts, setCarts }) {
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


                  <Row gutter={[16, 16]}>
                     {carts.map(c =>
                        <Col xs={24} key={c.id} style={{ background: '#F8F3F6' }}>
                           <CardOrderNew 
                              orderItem={c}
                              carts={carts}
                              setCarts={setCarts}
                           />
                        </Col>
                     )}
                  </Row>

                  <ShopPayTotal carts={carts} />
                  {/* <ShopGrandTotal carts={carts}/> */}

               </Drawer>
            </Badge>

         </Col>
      </Row>
   )
};
