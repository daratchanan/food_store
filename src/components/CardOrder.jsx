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
   MinusCircleOutlined,
   PlusCircleOutlined
} from '@ant-design/icons';


export default function CardOrder({ carts }) {
   return (
      <Row gutter={[16, 0]} justify='space-between'>
         <Col style={{ background: 'pink' }} >
            <img
               src='https://cdn.pixabay.com/photo/2016/06/08/19/46/cereal-1444495__340.jpg'
               alt='image'
               width='90px'
            />
         </Col>

         <Col flex={1} style={{ background: 'lightblue' }}>
            <Row>
               <Col xs={24} style={{ background: 'pink' }}>
                  <Row justify='space-between'>
                     <Col>
                        <Typography.Paragraph>crealmilk</Typography.Paragraph>
                        <Statistic
                           prefix='$'
                           value={400}
                           valueStyle={{ fontSize: '14px' }}
                        />
                     </Col>
                     <Col>
                        <Typography.Paragraph>Total</Typography.Paragraph>
                        <Statistic
                           prefix='$'
                           value={400}
                           valueStyle={{ fontSize: '14px' }}
                        />
                     </Col>

                  </Row>
               </Col>
            </Row>
            <Row justify='center'>
               <Col>
                  <Space.Compact block>
                     <Button size='small' icon={<MinusOutlined />} />
                     <div className='input-qty'>
                        <InputNumber
                           size='small'
                           controls={false}
                           min={1}
                        />
                     </div>
                     <Button size='small' icon={<PlusOutlined />} />
                  </Space.Compact>
               </Col>
            </Row>

         </Col>

      </Row>
   )
};
