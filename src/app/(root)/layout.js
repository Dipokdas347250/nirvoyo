import Category_Item from '@/components/common/Category_Item'
import Header from '@/components/common/Header'
import React from 'react'

const layout = ({ children }) => {
  return (
    <>
    <Header/>
    <Category_Item/>
    {children}
    
    </>
  )
}

export default layout