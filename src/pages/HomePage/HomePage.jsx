import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import SilderComponent from '../../components/SilderComponent/SilderComponent'
import slider1 from '../../assets/images/Slider1.webp';
import slider2 from '../../assets/images/Slider2.webp';
import slider3 from '../../assets/images/Slider3.webp';
import CardComponent from '../../components/CardComponent/CardComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';


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

<div id='container' style={{backgroundColor: '#efefef',padding:'0 120px',height:'1000px'}}>

   <SilderComponent arrImages={[slider1,slider2,slider3]}/>
    <div style={{marginTop:'20px',display:'flex',alignItems:'center',gap:'20px'}}>
        <CardComponent/>
    </div>
    <NavbarComponent/>
</div>
    
    </>
        
    
  )
}

export default HomePage
