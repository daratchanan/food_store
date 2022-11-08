import React, { useState } from 'react'
import {
   Button,
   Col,
   InputNumber,
   Rate,
   Row,
   Space,
   Typography
} from 'antd';
import {
   MinusOutlined,
   PlusOutlined
} from '@ant-design/icons';

export default function ProductCard({ product, cart, setCart }) {
   const [orderItems, setOrderItems] = useState({ ...product, qty: 1 });

   const onSelectProducts = () => {
      setCart([orderItems])
   };

   // console.log('products=>', products)
   // console.log('qty=>', qty)
   // console.log('orderItems=>', orderItems)
   console.log('cart=>', cart);

   return (
      <Row
         gutter={[0, 10]}
         style={{
            background: '#fff',
            padding: '10px'
         }}
      >
         <Col xs={24}>
            <img
               src={product.img}
               alt={product.name}
               width='100%'
            />
         </Col>

         <Col xs={24}>
            <Typography.Text>{product.name}</Typography.Text>
         </Col>

         <Col xs={24}>
            <Row justify='space-between'>
               <Col>
                  <Rate
                     defaultValue={product.rating}
                     style={{ fontSize: '15px' }}
                  />
               </Col>
               <Col>
                  <Typography.Text>$ {product.price}</Typography.Text>
               </Col>
            </Row>
         </Col>

         <Col xs={24} >
            <Row justify='center'>
               <Col>
                  <Space >
                     <Button
                        icon={<MinusOutlined />}
                        disabled={orderItems.qty <= 1}
                        onClick={() => setOrderItems(prev => ({ ...prev, qty: prev.qty - 1 }))}
                     />
                     <div className='input-qty'>
                        <InputNumber
                           style={{ width: '100%' }}
                           controls={false}
                           min={1}
                           value={orderItems.qty}
                        />
                     </div>
                     <Button
                        icon={<PlusOutlined />}
                        onClick={() => setOrderItems(prev => ({ ...prev, qty: prev.qty + 1 }))}
                     />
                  </Space>
               </Col>
            </Row>
         </Col>

         <Col xs={24} >
            <Button
               type='primary'
               style={{ width: '100%' }}
               onClick={onSelectProducts}
            >
               สั่งอาหาร
            </Button>
         </Col>

      </Row>
   )
};
