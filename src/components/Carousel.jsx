import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import DynamicSlide from './DynamicSlide';

export default function Carousel() {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <DynamicSlide image={banner1} text={'Build your new Saas Project'}></DynamicSlide>
        </SwiperSlide>
        <SwiperSlide>
          <DynamicSlide image={banner2} text={'Build your new Web Project'}></DynamicSlide>
        </SwiperSlide>
        <SwiperSlide>
          <DynamicSlide image={banner3} text={'Build your new Blockchain Project'}></DynamicSlide>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
