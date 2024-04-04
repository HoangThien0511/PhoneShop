import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import OrderPage from './pages/OrderPage/OrderPage'
import { routes } from './routes'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
 function App() {


  
  // useEffect(()=>{
  //   fetchApi()
  // },[])
  console.log(process.env.REACT_APP_API_URL)
  const fetchApi = async () => {
    const res=await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all`)
    return res.data
  }
  const query = useQuery({queryKey: ['todos'],queryFn:fetchApi})
  console.log("query",query)
  return (
    <div>
        <Router>
          <Routes>
           {
            routes.map((route)=> {
              const Page = route.page;
              const Layout=route.isShowHeader ? DefaultComponent : Fragment
              return (
                
                <Route key={route.path} path={route.path} element={
                  <Layout>
                    <Page/>
                  </Layout>
                }/>
              )
            })
           }


          </Routes>
        </Router>
    </div>
  )
}
export default App