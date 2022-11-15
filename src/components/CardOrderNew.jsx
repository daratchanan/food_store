import React, { useState } from 'react';
import {
   Button,
   Col,
   InputNumber,
   Modal,
   Row,
   Space,
   Statistic,
   Typography
} from 'antd';
import {
   CloseOutlined,
   MinusOutlined,
   PlusOutlined
} from '@ant-design/icons';

export default function CardOrderNew({ idx, orderItem, carts, setCarts }) {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const onPlus = () => {
      const newCarts = [...carts];
      const index = newCarts.indexOf(orderItem);
      newCarts[index].qty += 1;
      setCarts(newCarts)
   };

   const onMinus = () => {
      const newCarts = [...carts];
      const index = newCarts.indexOf(orderItem);
      newCarts[index].qty -= 1;
      setCarts(newCarts)
   };

   const onDeleteItem = () => {
      const tempCarts = [...carts];
      const newCarts = tempCarts.filter(f => f.id !== orderItem.id);
      setCarts(newCarts);
      setIsModalOpen(false);
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
      <div style={{ padding: '8px' }}>
         <Row>
            <Col xs={24}>
               <Row gutter={[5, 0]}>
                  <Col xs={2}>
                     <Typography style={{ color: 'lightgray' }}>{idx + 1}</Typography>
                  </Col>

                  <Col flex={1}>
                     <Typography.Title level={5}>{orderItem.name}</Typography.Title>
                  </Col>

                  <Col>
                     <Button
                        shape='circle'
                        size='small'
                        icon={<CloseOutlined />} 
                        onClick={onDeleteItem}
                        />
                  </Col>
               </Row>
            </Col>

            <Col xs={24}>
               <Row>
                  <Col xs={2} />
                  <Col flex={1}>
                     <Row justify='space-between'>
                        <Col>
                           <Statistic
                              prefix='฿'
                              suffix={<span style={{color: 'lightgray', fontSize: '12px'}}>/ หน่วย</span>}
                              value={orderItem.price}
                              valueStyle={{ fontSize: '14px' }}
                           />
                        </Col>

                        <Col>
                           <Space>
                              {orderItem.qty <= 1 ?
                                 <Button
                                    icon={<MinusOutlined />}
                                    shape='circle'
                                    size='small'
                                    onClick={() => setIsModalOpen(true)}
                                 />
                                 :
                                 <Button
                                    icon={<MinusOutlined />}
                                    shape='circle'
                                    size='small'
                                    onClick={onMinus}
                                 />
                              }
                              <div className='input-qty'>
                                 <InputNumber
                                    size='small'
                                    controls={false}
                                    min={1}
                                    value={orderItem.qty}
                                    style={{ width: '50px' }}
                                    onChange={(value) => onChange(value)}
                                 />
                              </div>
                              <Button
                                 icon={<PlusOutlined />}
                                 type='primary'
                                 shape='circle'
                                 size='small'
                                 onClick={onPlus}
                              />

                           </Space>
                        </Col>

                        <Col>
                           <Statistic
                              prefix='฿'
                              precision={2}
                              value={orderItem.price * orderItem.qty}
                              valueStyle={{ fontSize: '14px', color: '#FF0270', fontWeight: 'bold' }}
                           />
                        </Col>
                     </Row>
                  </Col>
               </Row>

            </Col>
         </Row>

         <Modal
            title='ยกเลิกสินค้า'
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            onOk={onDeleteItem}
         >
            {orderItem.name}
            <Typography.Paragraph style={{ marginTop: '10px' }}>ยืนยันเพื่อยกเลิกสินค้า ?</Typography.Paragraph>
         </Modal>
      </div>
   )
};
