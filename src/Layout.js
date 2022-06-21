import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import UserList from './Pages/UserList/UserList';
import User from "./Pages/User/User"
import NewUser from './Pages/NewUser/NewUser';
import ProductList from './Pages/ProductList/ProductList';
import Product from './Pages/Product/Product';
import Login from './Pages/Login/Login';
import { useSelector } from "react-redux"
import NewProduct from './Pages/NewProduct/NewProduct';
import NeedLogin from './Pages/Need Login/NeedLogin';
import InvalidUrl from './Pages/InvalidUrl/InvalidUrl';


const Layout = () => {
   // const admin=useSelector((state)=>state.user.currentUser)
   const admin = useSelector((state) => state.user.currentUser);


   return (<>



      <Routes>



         <Route path="/" element={<Login />} />
     
         <Route path="/dashboard" element={admin ? <LandingPage /> : <Navigate to="/" />} />
       {/* <Route path="/dashboard" element={<LandingPage/>}/> */}


         <Route path='/users' element={<UserList />} />
         <Route path='/user/:userid' element={<User />} />
         <Route path='/newUser' element={<NewUser />} />
         <Route path='/products' element={<ProductList />} />
         <Route path='/product/:productid' element={<Product />} />
         <Route path='/newProduct' element={<NewProduct />} />
       
      </Routes>

   </>);
}

export default Layout;