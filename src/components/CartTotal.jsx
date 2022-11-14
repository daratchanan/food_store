import React from 'react'
import {
   Button,
   Col,
   Divider,
   Row,
   Statistic,
   Typography
} from 'antd'

export default function CartTotal({ carts }) {
   const totalPrice = carts.reduce((prev, cur) => prev + (cur.price * cur.qty), 0)

   return (
      <div style={{ padding: '10px' }}>
         <Typography.Title level={5}>CART</Typography.Title>
         <Row >
            <Col>
               <Typography.Text style={{ fontWeight: 'bold' }}>No products</Typography.Text>
            </Col>
            <Divider style={{ margin: '5px 0px' }} />

            <Col xs={24}>
               <Row justify='space-between'>
                  <Col>
                     <Typography.Text>Shipping</Typography.Text>
                  </Col>
                  <Col>
                     <Typography.Text>$ 0.00</Typography.Text>
                  </Col>
               </Row>
            </Col>

            <Col xs={24} style={{ marginBottom: '10px' }}>
               <Row justify='space-between'>
                  <Col>
                     <Typography.Text>Total</Typography.Text>
                  </Col>
                  <Col >
                     <Statistic
                        prefix='$'
                        value={totalPrice}
                        valueStyle={{ fontSize: '16px' }}
                     />
                  </Col>
               </Row>
            </Col>

            <Col xs={24}>
               <Row justify='center' gutter={[5,0]}>
                  <Col>
                     <Button type='primary'>
                        Cart
                     </Button>
                  </Col>
                  <Col>
                     <Button
                        type='primary'
                     >Check out</Button>
                  </Col>
               </Row>
            </Col>
         </Row>
      </div>
   )
};
