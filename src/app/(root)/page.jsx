import Banner from '@/components/home/Banner'
import Category from '@/components/home/Category'
import Featured_Product from '@/components/home/Featured_Product'
import Flash from '@/components/home/Flash'
import React from 'react'

const page = () => {
  return (
    <>
    <Banner/>
    <Category/>
    <Flash/>
    <Featured_Product/>
    </>
  )
}

export default page