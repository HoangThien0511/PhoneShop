import React from 'react'
import { WrapperContent, WrapperLableText, WrapperTextValue,WrapperTextPrice } from './style'
import {Checkbox,Rate} from 'antd'

const NavbarComponent = () => {
    const renderContent=(type,options)=>{
      const onChange=()=>{}
        switch(type){
            case 'text':
                return options.map((option) => {
                    return <WrapperTextValue>{option}</WrapperTextValue>
                })
            case 'checkbox':
              return (
                <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} >
                {options.map((option) => {
                    return (
                        <Checkbox style={{ marginLeft: 0 }} value={option.value}>{option.label}</Checkbox>
                    )
                })}
            </Checkbox.Group>
              )
              case 'star':
                return options.map((option) => {
                  return (
                      <div style={{ display: 'flex', }}>
                          <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                          <span> {`từ ${option}  sao`}</span>
                      </div>
                  )
              })
              case 'price':
                return options.map((option) => {
                    return (
                        <WrapperTextPrice>{option}</WrapperTextPrice>
                    )
                }) 
            default:
                return {}
        }
    }
  return (
    <div>
      <WrapperLableText>Lable</WrapperLableText>

    <WrapperContent> 
         {renderContent('text',['Tu lanh','TV','May Giat'])}
         {renderContent('checkbox',[
          {value:'a',label:'A'},
          {value:'b',label:'B'}
         ])}
         </WrapperContent>
    <WrapperContent> 
         {renderContent('star',[3,4,5])}
    </WrapperContent>
    <WrapperContent> 
         {renderContent('price',['dưới 40','trên 50.000'])}
    </WrapperContent>
    </div>
  )
}

export default NavbarComponent
