// /*eslint-disable */

// import React, {useState} from "react";
// import { NavLink } from "react-router-dom";
// import {RiCloseLine } from 'react-icons/ri';

// import {logo} from '../assets';
// import { links } from "../assets/constants";
// import { HiOutlineMenu } from "react-icons/hi";

// const NavLinks = ({handleClick}) => {
//   return (

//   <div className="mt-10 ">
//     {links.map((item)=> (
//         <NavLink className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
//             key={item.name}
//             to={item.to}
//             onClick={()=> handleClick &&  handleClick()}>
//             <item.icon  className="w-6 h-6 mr-2"/>
//           {item.name}
          
//         </NavLink>
//     ))}
//   </div>
//   )};

// const Sidebar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <>
//       <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624] ">
//       <img src={logo} alt="logo" className="w-full h-14 object-contain "/>
//         <NavLinks/>
//       </div>

//       <div className="absolute md:hidden block top-6 right-3">
//         {mobileMenuOpen ? (
//           <RiCloseLine className="w-6 h-6 text-white mr-2" 
//             onClick={()=> setMobilemenuOpen(false)}
//           />
//         ) : <HiOutlineMenu className="w-6 h-6 text-white mr-2"
//                       onClick={()=> setMobilemenuOpen(true)}
//         />}
//       </div>

//       <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : 'left-full'}`}>
//       <img src={logo} alt="logo" className="w-full h-14 object-contain "/>
//         <NavLinks handleClick={()=> setMobileMenuOpen(false)}/>
//       </div>

//     </>
//   );
// };

// export default Sidebar;


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';
import favicon from '../assets/1.png'

const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={favicon} alt="logo" className="w-full h-30 object-contain" />
        <NavLinks />
      </div>

      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <RiCloseLine className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;