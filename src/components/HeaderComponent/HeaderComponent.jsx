import { Badge, Col, Row,Popover } from 'antd'
import React, { useState } from 'react'
import { WrapperHeader, WrapperTextHeader,WrapperHeaderAccount,WrapperHeaderSmall, WrapperContentPopup } from './style'
import * as UserService from '../../services/UserService'
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
  } from '@ant-design/icons';
  import { useDispatch, useSelector } from 'react-redux';

import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import { resetUser } from '../../redux/slides/userSlide';
import Loading from '../LoadingComponent/Loading';


const HeaderComponent = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const navigate=useNavigate()
  const user = useSelector((state) => state.user)
  const handleNavigateLogin=()=> {
    navigate('/sign-in')
  }
  const handleLogout=async()=>{
    localStorage.removeItem("access_token");
    setLoading(true)
    await UserService.logoutUser()
    dispatch(resetUser())
    setLoading(false)
  }

  const content= (
    <div>
      <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
      <WrapperContentPopup>Thông tin người dùng</WrapperContentPopup>
    </div>
  )
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
        <Loading isPending={loading}>
       <WrapperHeaderAccount>
       <UserOutlined style={{fontSize: '30px'}} />
        {user?.email ? (
          <>
              <Popover content={content} trigger="click">
                <div style={{cursor: 'pointer'}}>{user.email}</div>
              </Popover>
          </>
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
       </Loading>
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
