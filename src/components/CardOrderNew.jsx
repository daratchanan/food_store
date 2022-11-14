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
   CloseOutlined,
   MinusOutlined,
   PlusOutlined
} from '@ant-design/icons';

export default function CardOrderNew({ orderItem, carts, setCarts }) {

   
   return (
      <div style={{ padding: '8px 0px' }}>
         <Row>
            <Col xs={24}>
               <Row gutter={[5, 0]}>
                  <Col xs={2}>
                     <Typography style={{ color: 'lightgray' }}>10</Typography>
                  </Col>

                  <Col flex={1}>
                     <Typography.Title level={5}>หมูนุ่มพริกไทยดำ</Typography.Title>
                  </Col>

                  <Col>
                     <Button
                        shape='circle'
                        size='small'
                        icon={<CloseOutlined />} />
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
                              suffix='/ หน่วย'
                              value={115}
                              valueStyle={{ fontSize: '14px' }}
                           />
                        </Col>

                        <Col>
                           <Space>
                              <Button
                                 icon={<MinusOutlined />}
                                 shape='circle'
                                 size='small'
                              />
                              <div className='input-qty'>
                                 <InputNumber
                                    size='small'
                                    controls={false}
                                    min={1}
                                    value={200}
                                    style={{ width: '50px' }}
                                 // bordered={false}
                                 />
                              </div>
                              <Button
                                 icon={<PlusOutlined />}
                                 shape='circle'
                                 size='small'

                              />

                           </Space>
                        </Col>

                        <Col>
                           <Statistic
                              prefix='฿'
                              precision={2}
                              value={115}
                              valueStyle={{ fontSize: '14px' }}
                           />
                        </Col>
                     </Row>
                  </Col>
               </Row>

            </Col>
         </Row>
      </div>
   )
};
