import Navbar from "../NavBar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

import React from 'react'

export default function Layout() {
  return (
   <>
   <Navbar></Navbar>
   <Outlet></Outlet>
   <Footer></Footer>
   </>
  )
}
