import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import SilderComponent from '../../components/SilderComponent/SilderComponent'
import slider1 from '../../assets/images/Slider1.webp';
import slider2 from '../../assets/images/Slider2.webp';
import slider3 from '../../assets/images/Slider3.webp';
import CardComponent from '../../components/CardComponent/CardComponent';
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../services/ProductService'


const HomePage = () => {
    const arr=['TV','Tu Lanh ','Lap Top']
    const fetchProductAll=async() =>
    {
      const res=  await ProductService.getAllProduct()
      console.log('res',res)
      return res
    }
    const { isPending, data:products } = useQuery({ queryKey: 'product', queryFn: fetchProductAll, retry: 3, retryDelay: 1000})
    console.log('data',products)
  return (
    <>
       <div style={{width:'1270px', margin:'0 auto'}} >

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
        {products?.data?.map((product)=>{
            return (
                <CardComponent
                 key={product._id}
                countInStock={product.countInStock} 
                description={product.description} 
                image={product.image} 
                name={product.name}
                price={product.price} 
                rating={product.rating} 
                type={product.type}
                selled={product.selled}
                discount={product.discount}
                />
            )
        } )}
        
        

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
