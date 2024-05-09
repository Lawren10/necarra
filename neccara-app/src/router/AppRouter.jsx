/* eslint-disable react/jsx-no-undef */
import { Routes,Route } from "react-router-dom"
import HomePage from "../pages/home/Page"
import Shop from "../pages/shop/Page"
import Brand from "../pages/brand/Page"
import Blog from "../pages/blog/Page"
import Contact from "../pages/contact/Page"

const AppRouter = () => {
  return (
    <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/shop" element={<Shop/>}/>
     <Route path="/brand" element={<Brand/>}/>
     <Route path="/blog" element={<Blog/>}/>
     <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default AppRouter