import React from 'react'
import {
   Button,
   Col,
   Divider,
   Row,
   Typography
} from 'antd'

export default function CartShopping() {
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
                  <Col>
                     <Typography.Text>$ 0.00</Typography.Text>
                  </Col>
               </Row>
            </Col>

            <Col xs={24}>
               <Row justify='center'>
                  <Col>
                     <Button
                        type='primary'
                        style={{
                           borderRadius: '5px'
                        }}
                     >
                        Cart
                     </Button>
                  </Col>
                  <Col>
                     <Button
                        type='primary'
                        style={{
                           borderRadius: '5px',
                           marginLeft: '5px'
                        }}
                     >Check out</Button>
                  </Col>
               </Row>
            </Col>
         </Row>
      </div>
   )
};
