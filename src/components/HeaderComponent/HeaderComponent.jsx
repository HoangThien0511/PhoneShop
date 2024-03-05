import { Col, Row } from 'antd'
import React from 'react'
import { WrapperHeader, WrapperTextHeader,WrapperHeaderAccount,WrapperHeaderSmall } from './style'
import Search from 'antd/es/transfer/search'
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
  } from '@ant-design/icons';
const HeaderComponent = () => {
  return (
    <div>
        {/* wrapper thay thế cho row */}
       <WrapperHeader gutter={16}>

        <Col span={6}>
            <WrapperTextHeader>
                EzLux
            </WrapperTextHeader>
        </Col>
        <Col span={12}>
            <Search
                placeholder="input search text"
                enterButton="Search"

               
    /></Col>
        <Col span={6} style={{display:'flex',gap:'20px'}}>
       <WrapperHeaderAccount>
       <UserOutlined style={{fontSize: '30px'}} />
            <div>
                <WrapperHeaderSmall>Đăng nhập/Đăng ký</WrapperHeaderSmall>
                
           
            <div>
            <WrapperHeaderSmall>Tài Khoản</WrapperHeaderSmall>
            <CaretDownOutlined />
            </div>
            </div>
       </WrapperHeaderAccount>
        <div>
      <ShoppingCartOutlined style={{fontSize:'30px',color:'#fff'}} />
      <WrapperHeaderSmall>Giỏ hàng</WrapperHeaderSmall>
      </div>
        </Col>
    </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
