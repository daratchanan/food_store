import React from 'react';
import {
   Button,
   Col,
   InputNumber,
   Row,
   Space,
   Statistic,
   Typography
} from 'antd';
import {
   MinusOutlined,
   PlusOutlined,
   DeleteOutlined
} from '@ant-design/icons';


export default function CardOrder({ orderItem, carts, setCarts }) {

   const onDeleteItem = () => {
      const tempCarts = [...carts];
      const newCarts = tempCarts.filter(f => f.id !== orderItem.id);
      setCarts(newCarts);
   };

   const onMinus = () => {
      const newCarts = [...carts];
      const index = newCarts.indexOf(orderItem);
      newCarts[index].qty -= 1;
      setCarts(newCarts);
   };

   const onPlus = () => {
      const newCarts = [...carts];
      const index = newCarts.indexOf(orderItem);
      newCarts[index].qty += 1;
      setCarts(newCarts);
   };

   const onChange = (value) => {
      const newCarts = [...carts];
      const index = newCarts.indexOf(orderItem);
      newCarts[index].qty = value;
      setCarts(newCarts);
   };


   console.log('carts=>', carts);
   // console.log('orderItem=>', orderItem);

   return (
      <div style={{ padding: '8px 0px' }}>
         <Row gutter={[16, 0]} justify='space-between' >
            <Col >
               <img
                  src={orderItem.img}
                  alt={orderItem.name}
                  width='90px'
               />
            </Col>

            <Col flex={1} >
               <Row>
                  <Col xs={24} >
                     <Row justify='space-between'>
                        <Col>
                           <Typography.Paragraph style={{ marginBottom: '0px' }}>{orderItem.name}</Typography.Paragraph>
                           <Statistic
                              prefix='$'
                              value={orderItem.price}
                              valueStyle={{ fontSize: '14px' }}
                           />
                        </Col>
                        <Col>
                           <Typography.Paragraph style={{ marginBottom: '0px' }}>Total</Typography.Paragraph>
                           <Statistic
                              prefix='$'
                              value={orderItem.price * orderItem.qty}
                              valueStyle={{ fontSize: '14px' }}
                           />
                        </Col>

                     </Row>
                  </Col>
               </Row>

               <Row justify='center'>
                  <Col>
                     <Space>
                        {orderItem.qty <= 1 ?
                           <Button
                              danger
                              size='small'
                              icon={<DeleteOutlined />}
                              onClick={onDeleteItem}
                           /> :
                           <Button
                              size='small'
                              icon={<MinusOutlined />}
                              onClick={onMinus}
                           />
                        }
                        <div className='input-qty'>
                           <InputNumber
                              size='small'
                              controls={false}
                              min={1}
                              value={orderItem.qty}
                              onChange={onChange}
                           />
                        </div>
                        <Button
                           size='small'
                           icon={<PlusOutlined />}
                           onClick={onPlus}
                        />
                     </Space>
                  </Col>
               </Row>

            </Col>

         </Row>
      </div>
   )
};
