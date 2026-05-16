// "use client"
// import React, { useEffect, useState } from 'react'
// import Container from './Container';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// const Category_Item = () => {
//    const [show, setShow] = useState(true);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY < lastScrollY) {
//         setShow(true); // scroll up → show
//       } else {
//         setShow(false); // scroll down → hide
//       }

//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const categories = [
//     {
//       name: "Women's Fashion",
//       subcategories: [
//         {
//           name: "Saree",
//           items: [
//             "Cotton",
//             "Silk",
//             "Katan",
//             "Muslin",
//             "Jamdani",
//             "Georgette",
//             "Nokshi Kantha",
//             "Linen",
//             "Khadi",
//             "Tangail Taat",
//             "Monipuri",
//             "Dhakai Jamdani",
//           ],
//         },
//         {
//           name: "Clothes",
//           items: [
//             "T-shirt",
//             "Shorts",
//             "Shirt",
//             "Track suit",
//             "Jeans",
//             "Georgette",
//             "Waistcoat",
//             "Sweater",
//             "Coats",
//             "Suit",
//             "Sweatshirt",
//             "Uniform",
//           ],
//         },
//         {
//           name: "Cosmetic",
//           items: [
//             "Perfume",
//             "Eye make-up",
//             "Skin care",
//             "Hair care",
//             "Make-up",
//             "Oral Care",
//             "Body Care",
//             "Sanitary pad",
//             "Shower gels & creams",
//             "Hair Removal Products",
//             "Lipstick",
//             "Suntan cream",
//           ],
//         },
//         {
//           name: "Sports & Outdoor",
//           items: [
//             "Sweatshirt",
//             "T-shirt",
//             "Sports Bra",
//             "Leggings",
//             "Tracksuit",
//             "Running Shoes",
//             "Sports Bag",
//             "Sports Equipment",
//             "Outdoor Shoes",
//             "Snow Boot",
//             "Outdoor Equipment",
//             "Sports Accessories",
//           ],
//         },
//         {
//           name: "Personal Care",
//           items: [
//             "Perfume",
//             "Sexual Health",
//             "After Shave Products",
//             "Razor blade",
//           ],
//         },
//         {
//           name: "Shoes",
//           items: [
//             "Heeled shoes",
//             "sneakers",
//             "Casual Shoes",
//             "Babet",
//             "Sandals",
//             "Slippers",
//           ],
//         },
//       ],
//     },
    
//     {
//       name: "men's Fashion",
//     },
//     {
//       name: "Kid's Fashion",
//     },
//     {
//       name: "Home & Lifestyle",
//     },
//     {
//       name: "Arts & Crafts",
//     },
//     {
//       name: "Computer & Electronics",
//     },
//     {
//       name: "Food & Grocery",
//     },
//     {
//       name: "Food & Grocery",
//     },
   
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsPerPage, setItemsPerPage] = useState(3);

//   // responsive items count
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1536) {
//         setItemsPerPage(8);
//       } else if (window.innerWidth >= 1280) {
//         setItemsPerPage(8);
//       } else if (window.innerWidth >= 1024) {
//         setItemsPerPage(7);
//       } else if (window.innerWidth >= 768) {
//         setItemsPerPage(4);
//       } else {
//         setItemsPerPage(3);
//       }
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // visible categories
//   const visibleCategories = categories.slice(
//     currentIndex,
//     currentIndex + itemsPerPage,
//   );

//   // next
//   const handleNext = () => {
//     if (currentIndex + itemsPerPage < categories.length) {
//       setCurrentIndex(currentIndex + itemsPerPage);
//     }
//   };

//   // prev
//   const handlePrev = () => {
//     if (currentIndex - itemsPerPage >= 0) {
//       setCurrentIndex(currentIndex - itemsPerPage);
//     }
//   };
//   return (
    
//     <>

//       <header className="border-b px-5 md:px-0 bg-white sticky top-0 left-0 z-45 border-gray-200">
//         <Container>
//           <div className="">
//             <div className="pb-2.5 sticky flex justify-between items-center top-0 left-0 w-full py-5 bg-white">
//               <button
//                 onClick={handlePrev}
//                 disabled={currentIndex === 0}
//                 className=" text-[15px] lg:hidden text-gray-600  cursor-pointer"
//               >
                
//                 <IoIosArrowBack />
//               </button>
//               <ul
//                 className="  grid xl:flex xl:justify-between xl:gap-10  grid-cols-3 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-7 gap-1 2xs:gap-3 sm:gap-5 lg:gap-4 md:gap-2  relative"
//               >
//                 {visibleCategories?.map((item, index) => (
//                   <>
//                     <li
//                       key={index}
//                       className=" text-[8px] xs:text-[9px] 2xs:text-[14px] sm:text-[14px] md:text-[15px] text-[#333333] relative uppercase font-medium cursor-pointer hover:text-[#020202] duration-500 after:content-[''] after:absolute after:left-0 after:bottom-0
//             after:h-0.5 after:w-0 after:bg-[#0970CD] after:duration-500 hover:after:w-full group "
//                     >
//                       {item?.name}
//                       <div className="">
//                         {item?.subcategories && (
//                           <div className=" hidden absolute top-full left-0 w-65 sm:w-150 md:w-170 lg:w-230 xl:w-350  border border-gray-100 scale-z-110 bg-white px-17.75 pt-7.75 pb-6.5 group-hover:grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-15">
//                             {item?.subcategories?.map((item) => (
//                               <>
//                                 <div key={index} className="">
//                                   <h2 className=" font-poppins text-[16px] text-[#3D3D3F] font-medium">
//                                     {item?.name}
//                                   </h2>
//                                   <ul>
//                                     {item?.items?.map((item) => (
//                                       <li className="text-[#757575] hover:text-[#0970CD] duration-200 font-normal font-poppins text-[14px] mt-1">
//                                         {item}
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 </div>
//                               </>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </li>
//                   </>
//                 ))}
//               </ul>
//               <button
//                 onClick={handleNext}
//                 disabled={currentIndex + itemsPerPage >= categories.length}
//                 className=" text-[15px] lg:hidden text-gray-600  cursor-pointer"
//               >
//                 <IoIosArrowForward />
//               </button>
//             </div>
//           </div>
//         </Container>
//       </header>
//     </>
//   )
// }

// export default Category_Item


import React from 'react'
import Container from './Container'
import { MdKeyboardArrowRight,MdKeyboardArrowLeft  } from "react-icons/md";


const Category_Item = () => {



  return (
    <>
    <nav className='pb-1 border-b border-[#E0E0E0] bg-[#fafafa]'>
      <Container>
        <div className="pl-9.5 pr-3">
          <ul className='flex justify-between items-center '>
            
              <li className='category-item  '>Women's Fashion</li>
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