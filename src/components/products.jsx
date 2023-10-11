import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className='ml-16 mr-16 mt-16 p-8 h-full mob-card:p-2 mob-card:mr-0 mob-card:ml-0'>
      <div>
        <div className='flex gap-10 mob-card:gap-1 flex-wrap'>
          <Link to='product_details' className='card-div'>
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
          </Link>
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
    </div>
  );
};

export default Products;
