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
import { motion } from 'framer-motion';

export default function ProductCard({ product, carts, setCarts }) {
   const [qty, setQty] = useState(1);

   const onSelectProducts = () => {
      const oldCarts = [...carts]

      const targetProduct = oldCarts.find(f => f.id === product.id);

      if (!targetProduct) {
         oldCarts.push({ ...product, qty: qty });
         setCarts(oldCarts)
      } else {
         const index = oldCarts.indexOf(targetProduct);
         oldCarts[index].qty = oldCarts[index].qty + qty;
         setCarts(oldCarts)
      };
   };

   // console.log('product=>', product)
   // console.log('qty=>', qty)
   // console.log('carts=>', carts);

   return (
      <motion.div whileHover={{ scale: 1.025 }}>
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
                           disabled={qty <= 1}
                           onClick={() => setQty(prev => prev <= 1 ? 1 : prev - 1)}
                        />
                        <div className='input-qty'>
                           <InputNumber
                              style={{ width: '100%' }}
                              controls={false}
                              min={1}
                              value={qty}
                              onChange={(value) => setQty(value)}
                           />
                        </div>
                        <Button
                           icon={<PlusOutlined />}
                           onClick={() => setQty(prev => prev + 1)}
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
      </motion.div>
   )
};
