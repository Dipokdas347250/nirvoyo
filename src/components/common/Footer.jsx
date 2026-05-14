import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <>
    <footer>
        <Container>
            <div className="">
                <div className="w-[40%]">
                    <h2 className="text-[24px] text-secondary font-medium font-poppins uppercase">Ecommerce</h2>
                    <p className="text-[16px] font-normal font-poppins text-[#757575]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus auctor mi, a bibendum nisl.</p>
                </div>
                <div className="w-[60%]"></div>
            </div>
        </Container>
    </footer>
    </>
  )
}

export default Footer