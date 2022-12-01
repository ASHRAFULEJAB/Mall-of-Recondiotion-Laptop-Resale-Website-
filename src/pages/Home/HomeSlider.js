import React from 'react'
import img1 from '../../image/pattiwala.jpg'
import img2 from '../../image/rsz_dell.jpg'
import img3 from '../../image/hp.png'
import img4 from '../../image/dell.jpg'

const HomeSlider = () => {
  return (
    <>
      <div className='carousel w-full'>
        <div id='item1' className='carousel-item w-full'>
          <img src={img2} alt='' className='w-full' />
        </div>
        <div id='item2' className='carousel-item w-full'>
          <img src={img1} alt='' className='w-full' />
        </div>
        <div id='item3' className='carousel-item w-full'>
          <img src={img3} alt='' className='w-full' />
        </div>
        <div id='item4' className='carousel-item w-full'>
          <img src={img4} alt='' className='w-full' />
        </div>
      </div>
      <div className='flex justify-center w-full py-2 gap-2'>
        <a href='#item1' className='btn btn-xs'>
          1
        </a>
        <a href='#item2' className='btn btn-xs'>
          2
        </a>
        <a href='#item3' className='btn btn-xs'>
          3
        </a>
        <a href='#item4' className='btn btn-xs'>
          4
        </a>
      </div>
    </>

    // <div className='carousel w-full mt-6 mb-0'>
    //   <div id='slide1' className='carousel-item relative w-full'>
    //     <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-20'>
    //       <a href='#slide4' className='btn btn-circle'>
    //         ❮
    //       </a>
    //       <a href='#slide2' className='btn btn-circle'>
    //         ❯
    //       </a>
    //     </div>
    //     <img src={img1} alt='' className='w-full h-1/4' />
    //   </div>
    //   <div id='slide2' className='carousel-item relative w-full'>
    //     <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-20'>
    //       <a href='#slide1' className='btn btn-circle'>
    //         ❮
    //       </a>
    //       <a href='#slide3' className='btn btn-circle'>
    //         ❯
    //       </a>
    //     </div>
    //     <img src={img2} alt='' className='w-full h-1/4' />
    //   </div>
    //   <div id='slide3' className='carousel-item relative w-full'>
    //     <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-20'>
    //       <a href='#slide2' className='btn btn-circle'>
    //         ❮
    //       </a>
    //       <a href='#slide4' className='btn btn-circle'>
    //         ❯
    //       </a>
    //     </div>
    //     <img src={img3} alt='' className='w-full h-1/4' />
    //   </div>
    //   <div id='slide4' className='carousel-item relative w-full'>
    //     <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-20'>
    //       <a href='#slide3' className='btn btn-circle'>
    //         ❮
    //       </a>
    //       <a href='#slide1' className='btn btn-circle'>
    //         ❯
    //       </a>
    //     </div>
    //     <img src={img4} alt='' className='w-full h-1/4' />
    //   </div>
    // </div>
  )
}

export default HomeSlider
