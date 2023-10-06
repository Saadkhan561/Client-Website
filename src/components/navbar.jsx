import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex items-center p-4 navbar:justify-between navbar:w-full border'>
        <div className='text-4xl'>Store</div>
        <div className='flex items-center navbar:hidden'>
          <div className='p-1 pl-12 font-semibold cursor-pointer'>Home</div>
          <div className='p-1 pl-12 font-semibold cursor-pointer'>Perfumes</div>
          <div className='p-1 pl-12 font-semibold cursor-pointer'>Garments</div>
          <div className='p-1 pl-12 font-semibold cursor-pointer'>About</div>
          <div className='p-1 pl-12 font-semibold cursor-pointer'>Contact</div>
        </div>
        <div className='flex items-center'>
          <div className='flex justify-between pl-2 pr-2 p-1 ml-2 rounded-full border border-gray'>
            <input
              className='focus:outline-none text-lg w-auto'
              type='search'
              placeholder='Search Here...'
            />
            <button>
              <img src='./images/search.png' alt='' height={25} width={25} />
            </button>
          </div>
          <div className='pl-4'><img className='cursor-pointer' src="./images/account2.png" alt="" height={25} width={25}/></div>
          <div className='pl-4'><img className='cursor-pointer' src="./images/cart.png" alt=""  height={25} width={25}/></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
