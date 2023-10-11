import React from 'react';

const Footer = () => {
  return (
    <div className='mt-64 flex footer-closed:flex-col justify-evenly p-8 bg-gray-300'>
      <div className='text-5xl font-semibold'>Stay in contact...</div>
      <div className='flex gap-10 footer-closed:flex-col footer-closed:mt-5'>
        <div>
          <ul className='text-md font-semibold'>
            <li className='mb-1 hover:cursor-pointer hover:underline'>
              Copyright &copy;
            </li>
            <li className='mb-1 hover:cursor-pointer hover:underline'>
              Contact
            </li>
            <li className='mb-1 hover:cursor-pointer hover:underline'>
              Privacy Policy
            </li>
            <li className='mb-1 hover:cursor-pointer hover:underline'>About</li>
            <li className='mb-1 hover:cursor-pointer hover:underline'>
              Login/Signup
            </li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-semibold mb-2'>Follow us on..</p>
          <div className='flex gap-2'>
            <img
              className='cursor-pointer hover:scale-110 duration-200'
              src='/images/facebook.png'
              alt=''
              height={25}
              width={25}
            />
            <img
              className='cursor-pointer hover:scale-110 duration-200'
              src='/images/instagram.png'
              alt=''
              height={25}
              width={25}
            />
            <img
              className='cursor-pointer hover:scale-110 duration-200'
              src='/images/twitter.png'
              alt=''
              height={25}
              width={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
