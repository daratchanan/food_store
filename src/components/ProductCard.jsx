import React from 'react'
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

export default function ProductCard({ products }) {
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
               src={products.img}
               alt={products.name}
               width='100%'
            />
         </Col>

         <Col xs={24}>
            <Typography.Text>{products.name}</Typography.Text>
         </Col>

         <Col xs={24}>
            <Row justify='space-between'>
               <Col>
                  <Rate
                     defaultValue={products.rating}
                     style={{ fontSize: '15px' }}
                  />
               </Col>
               <Col>
                  <Typography.Text>$ {products.price}</Typography.Text>
               </Col>
            </Row>
         </Col>

         <Col xs={24} >
            <Row justify='center'>
               <Col>
                  <Space >
                     <Button icon={<MinusOutlined />} />
                     <div className='input-qty'>
                        <InputNumber
                           style={{ width: '100%' }}
                           controls={false}
                        />
                     </div>
                     <Button icon={<PlusOutlined />} />
                  </Space>
               </Col>
            </Row>
         </Col>

         <Col xs={24} >
            <Button
               type='primary'
               style={{ width: '100%' }}
            >
               สั่งอาหาร
            </Button>
         </Col>

      </Row>
   )
};
