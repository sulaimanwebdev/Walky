import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';
import { Link } from 'react-router-dom';

const Slider = () => {

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
  
  
    const [addClass, setaddClass] = React.useState('');
  
    React.useEffect(() => {
      setTimeout(() => {
        setaddClass('z-[99]');
      }, 1000);
    }, []);
  
    let data = [
      {
        title: "Rambam",
        image: "/assets/rambam.png",
        patients: "35,000",
        accuracy: "96%",
        lastUpdate: "Last updated a week ago",
        link: "/data-sets/rambam"

      },

      {
        title: "Mayo Clinic",
        image: "/assets/mayo.png",
        patients: "35,000",
        accuracy: "98%",
        lastUpdate: "Last updated a week ago",
        link: "/data-sets/mayo-clinic"

      },

      {
        title: "Sheba",
        image: "/assets/sheba.png",
        patients: "35,000",
        accuracy: "92%",
        lastUpdate: "Last updated a week ago",
        link: "/data-sets/sheba"

      },

      {
        title: "Rambam",
        image: "/assets/rambam.png",
        patients: "35,000",
        accuracy: "96%",
        lastUpdate: "Last updated a week ago",
        link: "/data-sets/rambam"

      },

     
    ];

  return (
    <div className='relative overflow-hidden'>
      
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            620: {
              slidesPerView: 2,
            },
            862: {
              slidesPerView: 3,
            },
          }}
          slidesPerView={3}
          spaceBetween={25}
          initialSlide={1}
          pagination={data.length >= 4 ? { clickable: true } : false}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          // onSwiper={(swiper) => {
          //   // Delay execution for the refs to be defined
          //   setTimeout(() => {
          //     // Override prevEl & nextEl now that refs are defined
          //     swiper.params.navigation.prevEl = navigationPrevRef.current
          //     swiper.params.navigation.nextEl = navigationNextRef.current

          //     // Re-init navigation
          //     swiper.navigation.destroy()
          //     swiper.navigation.init()
          //     swiper.navigation.update()
          //   })
          // }}
          modules={[Navigation, Pagination]}
          className='relative w-full'
        >
          {data.map((ele) => {
            return (
              <SwiperSlide
                key={Math.random()}
                className='bg-[#F5F5F5] transition rounded-[14px] block overflow-hidden relative py-3 px-4'
              >
                <Link to={ele.link} className='relative'>
                <div className="flex items-start justify-between mb-6">
                  <div className='font-bold text-[23px]'>{ele.title}</div>
                  <img src={ele.image} alt="logo" className='w-[40px] object-cover absolute top-0 right-0' />
                </div>

                <div className="flex w-fit items-center justify-start flex-row-reverse gap-3 mb-2"><div><span className='text-[25px]'>{ele.patients} <span className='text-[15px]'>patients</span></span></div> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg></div>
                <div className="flex w-fit items-center justify-start flex-row-reverse gap-3 mb-3"><div><span className='text-[25px]'>{ele.patients} <span className='text-[15px]'>accuracy</span></span></div> <img src="/assets/logo-icon.svg" alt="logo" /></div>
                <div className='text-[15px]'>{ele.lastUpdate}</div>
                </Link>
              </SwiperSlide>
            );
          })}

          <div ref={navigationPrevRef} className='whiteGradientLeft z-30 absolute top-1/2 left-0 -translate-y-1/2 hidden 2sm:flex items-center justify-start w-[20px] 2sm:w-[80px] h-full cursor-pointer'><svg width="20" height="30" viewBox="0 0 31 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 42L4.00003 23L27 4" stroke="#4683B6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div ref={navigationNextRef} className='whiteGradientRight z-30 absolute top-1/2 right-0 -translate-y-1/2 hidden 2sm:flex items-center justify-end w-[20px] 2sm:w-[80px] h-full cursor-pointer'><svg width="20" height="30" viewBox="0 0 31 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4L27 23L4 42" stroke="#4683B6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
        </Swiper>

        {data.length >= 4 ? null : <div className="flex items-center justify-center w-fit mx-auto gap-[30px] my-7"><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span></div> }
        {data.length >= 4 ? <Link to="/" className='text-walkkyBlue font-bold w-fit float-right mt-14'>See All {`>`}</Link> : null}
    
    </div>
  )
}

export default Slider