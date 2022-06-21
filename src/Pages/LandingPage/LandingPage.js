import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import "./LandingPage.css"
import Home from "../HomePage/HomePage"
const LandingPage = () => {
    return ( <>
    <Navbar/>
    <Sidebar/>
    <Home style={{marginTop:"-1500px"}}/>
    
    </> );
}
 
export default LandingPage;