import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import SilderComponent from '../../components/SilderComponent/SilderComponent'
import slider1 from '../../assets/images/Slider1.webp';
import slider2 from '../../assets/images/Slider2.webp';
import slider3 from '../../assets/images/Slider3.webp';
import CardComponent from '../../components/CardComponent/CardComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';


const HomePage = () => {
    const arr=['TV','Tu Lanh ','Lap Top']

  return (
    <>
       <div style={{padding: '0 120px'}} >

<WrapperTypeProduct >
    {
        arr.map((item)=> {
            return (
                <TypeProduct name={item} key={item}/>
            )
        })
    }
 
 
</WrapperTypeProduct>
</div>

<div id='container' style={{backgroundColor: '#efefef',padding:'0 120px',height:'1000px',}}>

   <SilderComponent arrImages={[slider1,slider2,slider3]}/>
    <WrapperProducts >
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        

    </WrapperProducts>
   <div style={{width:'100%',display:'flex',justifyContent:'center', marginTop:'10px'}}>
   <WrapperButtonMore textbutton="Xem thêm" type="outline" styleButton={{border:'1px solid rgb(11,116,229)', color:'rgb(11,116,229)', width:'240px', height:'38px', borderRadius:'4px'
}} styleTextButton={{fontWeight:500}}/>
   </div>
</div>
    
    </>
        
    
  )
}

export default HomePage
