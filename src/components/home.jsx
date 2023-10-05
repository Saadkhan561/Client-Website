import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Home = () => {
    return (
      <div>
        <div className='relative w-full h-1/2'>
            <div className=''><img className='object-contain' src="./images/p-1.jpeg" alt="" /></div>
            <div className='absolute top-1/2 flex justify-between w-full'>
                <div><img src="./images/left-arrow.png" alt="" height={50} width={50}/></div>
                <div><img src="./images/right-arrow.png" alt="" height={50} width={50}/></div>
            </div>
        </div>
      </div>
    );
}
 
export default Home;