import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import SilderComponent from '../../components/SilderComponent/SilderComponent'
import slider1 from '../../assets/images/Slider1.webp';
import slider2 from '../../assets/images/Slider2.webp';
import slider3 from '../../assets/images/Slider3.webp';


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

<div id='container' style={{backgroundColor: '#efefef'}}>

   <SilderComponent arrImages={[slider1,slider2,slider3]}/>
</div>
    
    </>
        
    
  )
}

export default HomePage
