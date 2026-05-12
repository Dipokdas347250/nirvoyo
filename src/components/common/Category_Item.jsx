import React from 'react'
import Container from './Container'

const Category_Item = () => {
  return (
    <>
    <nav className='pb-1 border-b border-[#E0E0E0]'>
      <Container>
        <div className="pl-9.5 pr-3">
          <ul className='flex justify-between items-center'>
              <li className='category-item '>Women's Fashion</li>
              <li className='category-item '>men's Fashion</li>
              <li className='category-item '>Kid's Fashion</li>
              <li className='category-item '>Home & Lifestyle</li>
              <li className='category-item '>Arts & Crafts</li>
              <li className='category-item '>Computer & Electronics</li>
              <li className='category-item '>Food & Grocery</li>
          </ul>
        </div>
      </Container>
    </nav>
    </>
  )
}

export default Category_Item