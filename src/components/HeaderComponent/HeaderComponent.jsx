import { Col, Row } from 'antd'
import React from 'react'
import { WrapperHeader, WrapperTextHeader,WrapperHeaderAccount,WrapperHeaderSmall } from './style'
import Search from 'antd/es/transfer/search'
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
  } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
const HeaderComponent = () => {
  return (
    <div>
        {/* wrapper thay thế cho row */}
       <WrapperHeader>

        <Col span={6}>
            <WrapperTextHeader>
                EzLux
            </WrapperTextHeader>
        </Col>
        <Col span={12}>
            <ButtonInputSearch size="large"
              bordered={false}
              textbutton="Tìm kiếm"
              placeholder="input search text"

               
    /></Col>
        <Col span={6} style={{display:'flex',gap:'20px',alignItems:'center'}}>
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
