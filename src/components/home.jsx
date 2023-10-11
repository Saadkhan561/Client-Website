import React, { useState } from 'react';
import 'react-awesome-slider/dist/styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [arrow, setArrow] = useState(false);
  return (
    <div className='relative mt-16'>
      <div className='p-2 navbar-open:hidden'>
        <button
          onClick={() => setArrow(!arrow)}
          className='flex justify-center items-center border rounded-lg w-full p-1'
        >
          <img
            className={
              arrow ? 'rotate-180 duration-500' : 'rotate-0 duration-500'
            }
            src='./images/down-arrow.png'
            alt=''
            height={20}
            width={20}
          />
        </button>
      </div>
      <div
        className={
          arrow
            ? 'absolute top-10 flex justify-center items-center w-full navbar-open:hidden'
            : 'hidden'
        }
      >
        <ul className='flex flex-col justify-center items-center p-2 text-md w-full'>
          <li className='p-1 cursor-pointer hover:bg-gray-200 w-full'>Home</li>
          <li className='p-1 cursor-pointer hover:bg-gray-200 w-full'>
            Perfumes
          </li>
          <li className='p-1 cursor-pointer hover:bg-gray-200 w-full'>
            Garments
          </li>
          <li className='p-1 cursor-pointer hover:bg-gray-200 w-full'>About</li>
          <li className='p-1 cursor-pointer hover:bg-gray-200 w-full'>
            Contact
          </li>
        </ul>
      </div>
      <div
        className={
          arrow
            ? 'translate-y-44 duration-500 flex flex-col justify-center'
            : 'translate-y-0 duration-500 flex flex-col justify-center'
        }
      >
        {/* AD DIV */}
        {/* <div className='flex justify-center relative'>
          <div className='border border-black '>
            <img
              className='object-contain'
              src='./images/img-1.jpg'
              alt=''
              width={1000}
              height={600}
            />
          </div>
          <div className='absolute top-1/2 flex justify-between w-full'>
            <div>
              <img
                src='./images/left-arrow.png'
                alt=''
                height={50}
                width={50}
              />
            </div>
            <div>
              <img
                src='./images/right-arrow.png'
                alt=''
                height={50}
                width={50}
              />
            </div>
          </div>
        </div> */}
        {/* CARD DIV */}
        <div className='ml-16 mr-16 p-8 mob-card:p-2 mob-card:mr-0 mob-card:ml-0'>
          {/* PERFUME DIV */}
          <div>
            <div className='flex justify-between items-center p-4'>
              <p className='text-3xl'>Perfumes</p>
              <p className='text-sm underline'>
                <Link to='products'>View All</Link>
              </p>
            </div>
            <div className='flex gap-10 mob-card:gap-1 flex-wrap'>
              <div to='products' className='card-div'>
                <img
                  className='rounded-t-3xl'
                  src='./images/per-2.jpg'
                  alt=''
                  height={300}
                  width={300}
                />
                <div className='flex flex-col justify-between p-4 text-xl font-semibold'>
                  <p>Loewe Solo Esencial Eau De Toilette</p>
                  <p className='text-end'>29$</p>
                </div>
                <p className='absolute top-6 right-5 text-white text-sm font-semibold bg-red-600 p-1 rounded-full'>
                  SALE
                </p>
              </div>
              <div className='card-div'>
                <img
                  className='rounded-t-3xl'
                  src='./images/per-1.jpg'
                  alt=''
                  height={300}
                  width={300}
                />
                <div className='flex flex-col justify-between p-4 text-xl font-semibold'>
                  <p>Solo Yanbal Cologne</p>
                  <p className='text-end'>39$</p>
                </div>
                <p className='absolute top-6 right-5 text-white text-sm font-semibold bg-red-600 p-1 rounded-full'>
                  SALE
                </p>
              </div>
              <div className='card-div'>
                <img
                  className='rounded-t-3xl'
                  src='./images/per-2.jpg'
                  alt=''
                  height={300}
                  width={300}
                />
                <div className='flex flex-col justify-between p-4 text-xl font-semibold'>
                  <p>Loewe Solo Esencial Eau De Toilette</p>
                  <p className='text-end'>29$</p>
                </div>
                <p className='absolute top-6 right-5 text-white text-sm font-semibold bg-red-600 p-1 rounded-full'>
                  SALE
                </p>
              </div>
              <div className='card-div'>
                <img
                  className='rounded-t-3xl'
                  src='./images/per-1.jpg'
                  alt=''
                  height={300}
                  width={300}
                />
                <div className='flex flex-col justify-between p-4 text-xl font-semibold'>
                  <p>Solo Yanbal Cologne</p>
                  <p className='text-end'>39$</p>
                </div>
                <p className='absolute top-6 right-5 text-white text-sm font-semibold bg-red-600 p-1 rounded-full'>
                  SALE
                </p>
              </div>
              <div className='card-div'>
                <img
                  className='rounded-t-3xl'
                  src='./images/per-2.jpg'
                  alt=''
                  height={300}
                  width={300}
                />
                <div className='flex flex-col justify-between p-4 text-xl font-semibold'>
                  <p>Loewe Solo Esencial Eau De Toilette</p>
                  <p className='text-end'>39$</p>
                </div>
                <p className='absolute top-6 right-5 text-white text-sm font-semibold bg-red-600 p-1 rounded-full'>
                  SALE
                </p>
              </div>
              <div className='card-div'>
                <img
                  className='rounded-t-3xl'
                  src='./images/per-1.jpg'
                  alt=''
                  height={300}
                  width={300}
                />
                <div className='flex flex-col justify-between p-4 text-xl font-semibold'>
                  <p>Solo Yanbal Cologne</p>
                  <p className='text-end'>39$</p>
                </div>
                <p className='absolute top-6 right-5 text-white text-sm font-semibold bg-red-600 p-1 rounded-full'>
                  SALE
                </p>
              </div>
            </div>
          </div>
          {/* SHIRT DIV */}
          <div>
            <div className='flex justify-between items-center p-4'>
              <p className='text-3xl'>T-Shirts</p>
              <p className='text-sm underline'>
                <a href=''>View All</a>
              </p>
            </div>
            <div className='flex gap-10 mob-card:gap-1 flex-wrap'>
              <div className='card-div'>
                <img
                  className='rounded-t-3xl'
                  src='./images/shirt-1.jpg'
                  alt=''
                  height={300}
                  width={300}
                />
                <div className='flex flex-col justify-between p-4 text-xl font-semibold'>
                  <p>Faith and Yam</p>
                  <p className='text-end'>29$</p>
                </div>
                <p className='absolute top-6 right-5 text-white text-sm font-semibold bg-red-600 p-1 rounded-full'>
                  SALE
                </p>
              </div>
              <div className='card-div'>
                <img
                  className='rounded-t-3xl'
                  src='./images/shirt-2.jpg'
                  alt=''
                  height={300}
                  width={300}
                />
                <div className='flex flex-col justify-between p-4 text-xl font-semibold'>
                  <p>Ryan Hoffman</p>
                  <p className='text-end'>29$</p>
                </div>
                <p className='absolute top-6 right-5 text-white text-sm font-semibold bg-red-600 p-1 rounded-full'>
                  SALE
                </p>
              </div>
              <div className='card-div'>
                <img
                  className='rounded-t-3xl'
                  src='./images/shirt-1.jpg'
                  alt=''
                  height={300}
                  width={300}
                />
                <div className='flex flex-col justify-between p-4 text-xl font-semibold'>
                  <p>Faith and Yam</p>
                  <p className='text-end'>29$</p>
                </div>
                <p className='absolute top-6 right-5 text-white text-sm font-semibold bg-red-600 p-1 rounded-full'>
                  SALE
                </p>
              </div>
              <div className='card-div'>
                <img
                  className='rounded-t-3xl'
                  src='./images/shirt-2.jpg'
                  alt=''
                  height={300}
                  width={300}
                />
                <div className='flex flex-col justify-between p-4 text-xl font-semibold'>
                  <p>Ryan Hoffman</p>
                  <p className='text-end'>29$</p>
                </div>
                <p className='absolute top-6 right-5 text-white text-sm font-semibold bg-red-600 p-1 rounded-full'>
                  SALE
                </p>
              </div>
              <div className='card-div'>
                <img
                  className='rounded-t-3xl'
                  src='./images/shirt-1.jpg'
                  alt=''
                  height={300}
                  width={300}
                />
                <div className='flex flex-col justify-between p-4 text-xl font-semibold'>
                  <p>Faith and Yam</p>
                  <p className='text-end'>29$</p>
                </div>
                <p className='absolute top-6 right-5 text-white text-sm font-semibold bg-red-600 p-1 rounded-full'>
                  SALE
                </p>
              </div>
            </div>
          </div>
          {/* SHOE DIV */}
          <div>
            <div className='flex justify-between items-center p-4'>
              <p className='text-3xl'>Shoes</p>
              <p className='text-sm underline'>
                <a href=''>View All</a>
              </p>
            </div>
            <div className='flex gap-10 mob-card:gap-1 flex-wrap'>
              <div className='card-div'>
                <img
                  className='rounded-t-3xl'
                  src='./images/shoe-2.jpeg'
                  alt=''
                  height={300}
                  width={300}
                />
                <div className='flex flex-col justify-between p-4 text-xl font-semibold'>
                  <p>Air Jordan 3</p>
                  <p className='text-end'>49$</p>
                </div>
                <p className='absolute top-6 right-5 text-white text-sm font-semibold bg-red-600 p-1 rounded-full'>
                  SALE
                </p>
              </div>
              <div className='card-div'>
                <img
                  className='rounded-t-3xl'
                  src='./images/shoe-1.jpeg'
                  alt=''
                  height={300}
                  width={300}
                />
                <div className='flex flex-col justify-between p-4 text-xl font-semibold'>
                  <p>Air Jordan 5</p>
                  <p className='text-end'>49$</p>
                </div>
                <p className='absolute top-6 right-5 text-white text-sm font-semibold bg-red-600 p-1 rounded-full'>
                  SALE
                </p>
              </div>
              <div className='card-div'>
                <img
                  className='rounded-t-3xl'
                  src='./images/shoe-2.jpeg'
                  alt=''
                  height={300}
                  width={300}
                />
                <div className='flex flex-col justify-between p-4 text-xl font-semibold'>
                  <p>Air Jordan 3</p>
                  <p className='text-end'>49$</p>
                </div>
                <p className='absolute top-6 right-5 text-white text-sm font-semibold bg-red-600 p-1 rounded-full'>
                  SALE
                </p>
              </div>
              <div className='card-div'>
                <img
                  className='rounded-t-3xl'
                  src='./images/shoe-1.jpeg'
                  alt=''
                  height={300}
                  width={300}
                />
                <div className='flex flex-col justify-between p-4 text-xl font-semibold'>
                  <p>Air Jordan 5</p>
                  <p className='text-end'>49$</p>
                </div>
                <p className='absolute top-6 right-5 text-white text-sm font-semibold bg-red-600 p-1 rounded-full'>
                  SALE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
