import React from 'react';

const ProductDetails = () => {
  return (
    <div className='flex flex-col mt-32'>
      <div className='flex justify-center'>
        <div className='flex mob-card:flex-col gap-5'>
          <div className='flex justify-center mob-card:w-full'>
            <img
              className='object-contain'
              src='/images/per-1.jpg'
              alt=''
              height={350}
              width={350}
            />
          </div>
          <div className='flex flex-col w-[500px] mob-card:w-full p-4'>
            <p className='text-2xl font-semibold'>
              Loewe Solo Esencial Eau De Toilette
            </p>
            <p className='text-xl font-semibold'>39$</p>
            <p className='text-2xl font-semibold mt-8'>Description</p>
            <p className='text-lg'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
              deleniti adipisci? Officiis voluptatibus placeat atque mollitia,
              ut enim molestiae harum?
            </p>
            <button className='bg-red-600 text-white text-lg font-semibold w-[200px] p-1 mt-4 rounded-xl hover:shadow-xl hover:scale-[1.01] duration-100'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className='ml-16 mr-16 mt-16 p-8 h-full mob-card:p-2 mob-card:mr-0 mob-card:ml-0'>
        <div>
          <div className='flex gap-10 mob-card:gap-1 flex-wrap'>
            <div to='product_details' className='card-div'>
              <img
                className='rounded-t-3xl'
                src='/images/per-2.jpg'
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
                src='/images/per-1.jpg'
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
                src='/images/per-2.jpg'
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
                src='/images/per-1.jpg'
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
                src='/images/per-2.jpg'
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
                src='/images/per-1.jpg'
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
    </div>
  );
};

export default ProductDetails;
