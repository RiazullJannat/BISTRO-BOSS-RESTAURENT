import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionHeading from '../common/SectionHeading';

const Category = () => {
    return (
        <div className='my-12'>
            <div className='my-4'>
                <SectionHeading subHeading="From 11:00am to 10:00pm" heading="ORDER ONLINE"></SectionHeading>
            </div>
            <section>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" className='w-full' />
                        <p className='-mt-20 text-center md:text-3xl text-white'>SALADS</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" className='w-full' />
                        <p className='-mt-20 text-center md:text-3xl text-white'>SALADS</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" className='w-full' />
                        <p className='-mt-20 text-center md:text-3xl text-white'>SALADS</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" className='w-full' />
                        <p className='-mt-20 text-center md:text-3xl text-white'>SALADS</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" className='w-full' />
                        <p className='-mt-20 text-center md:text-3xl text-white'>SALADS</p>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default Category;