import Category_Item from '@/components/common/Category_Item'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Header_menu from '@/components/common/Header_menu'
import Shipping from '@/components/common/Shipping'
import React from 'react'

const layout = ({ children }) => {
  return (
    <>
    <Header/>
    <Header_menu/>
    <Category_Item/>
    {children}
    <Shipping/>
    <Footer/>
    
    </>
  )
}

export default layout