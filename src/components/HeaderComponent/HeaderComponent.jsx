import { Badge, Col, Row } from 'antd'
import React from 'react'
import { WrapperHeader, WrapperTextHeader,WrapperHeaderAccount,WrapperHeaderSmall } from './style'
import Search from 'antd/es/transfer/search'
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
  } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const HeaderComponent = () => {
  const navigate=useNavigate()
  const user = useSelector((state) => state.user)
  const handleNavigateLogin=()=> {
    navigate('/sign-in')
  }
  console.log('user', user)
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
            
              textbutton="Tìm kiếm"
              placeholder="input search text"

               
    /></Col>
        <Col span={6} style={{display:'flex',gap:'20px',alignItems:'center'}}>
       <WrapperHeaderAccount>
       <UserOutlined style={{fontSize: '30px'}} />
        {user?.email ? (
          <div style={{cursor:'pointer'}}>{user.email}</div>
        ):(

            <div onClick={handleNavigateLogin} style={{cursor:'pointer'}}>
                <WrapperHeaderSmall>Đăng nhập/Đăng ký</WrapperHeaderSmall>
                
           
            <div>
            <WrapperHeaderSmall>Tài Khoản</WrapperHeaderSmall>
            <CaretDownOutlined />
            </div>
            </div>
        )}
       </WrapperHeaderAccount>
        <div>
          <Badge count={4} size='small'>
          <ShoppingCartOutlined style={{fontSize:'30px',color:'#fff'}} />

          </Badge>
      <WrapperHeaderSmall>Giỏ hàng</WrapperHeaderSmall>
      </div>
        </Col>
    </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
